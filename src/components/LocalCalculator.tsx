'use client';

import React, { useState } from 'react';

/** Safe expression evaluator (no eval). Supports + - * / ^ ! ( ) functions and constants. */
function evaluate(src: string, deg: boolean, ans: number): number {
  const s = src
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-')
    .replace(/π/g, 'pi')
    .replace(/√/g, 'sqrt');
  const tokens = s.match(/\d*\.?\d+(?:e[+-]?\d+)?|[a-z]+|[-+*/^!()%]/gi) || [];
  let pos = 0;
  const peek = () => tokens[pos];
  const next = () => tokens[pos++];

  const toRad = (x: number) => (deg ? (x * Math.PI) / 180 : x);
  const fromRad = (x: number) => (deg ? (x * 180) / Math.PI : x);
  const fact = (n: number) => {
    if (n < 0 || !Number.isInteger(n) || n > 170) return NaN;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  };
  const FUNCS: Record<string, (x: number) => number> = {
    sin: (x) => Math.sin(toRad(x)),
    cos: (x) => Math.cos(toRad(x)),
    tan: (x) => Math.tan(toRad(x)),
    asin: (x) => fromRad(Math.asin(x)),
    acos: (x) => fromRad(Math.acos(x)),
    atan: (x) => fromRad(Math.atan(x)),
    ln: Math.log,
    log: Math.log10,
    sqrt: Math.sqrt,
    abs: Math.abs,
  };
  const CONSTS: Record<string, number> = { pi: Math.PI, e: Math.E, ans };

  function expr(): number {
    let v = term();
    while (peek() === '+' || peek() === '-') v = next() === '+' ? v + term() : v - term();
    return v;
  }
  function term(): number {
    let v = unary();
    for (;;) {
      const t = peek();
      if (t === '*' || t === '/') {
        next();
        const r = unary();
        v = t === '*' ? v * r : v / r;
      } else if (t !== undefined && t !== ')' && t !== '+' && t !== '-' && t !== '^' && t !== '!' && t !== '%') {
        v = v * unary(); // implicit multiplication: 2pi, 3(4+1), 2sin(30)
      } else break;
    }
    return v;
  }
  function unary(): number {
    if (peek() === '-') { next(); return -unary(); }
    if (peek() === '+') { next(); return unary(); }
    return power();
  }
  function power(): number {
    const base = postfix();
    if (peek() === '^') { next(); return Math.pow(base, unary()); }
    return base;
  }
  function postfix(): number {
    let v = primary();
    while (peek() === '!' || peek() === '%') v = next() === '!' ? fact(v) : v / 100;
    return v;
  }
  function primary(): number {
    const t = next();
    if (t === undefined) throw new Error('syntax');
    if (t === '(') {
      const v = expr();
      if (next() !== ')') throw new Error('syntax');
      return v;
    }
    if (/^[\d.]/.test(t)) return parseFloat(t);
    const name = t.toLowerCase();
    if (name in FUNCS) {
      const hasParen = peek() === '(';
      const arg = hasParen ? (next(), (() => { const v = expr(); if (next() !== ')') throw new Error('syntax'); return v; })()) : unary();
      return FUNCS[name](arg);
    }
    if (name in CONSTS) return CONSTS[name];
    throw new Error('syntax');
  }

  const result = expr();
  if (pos < tokens.length) throw new Error('syntax');
  return result;
}

const fmtNum = (n: number) => {
  if (!isFinite(n)) return 'Error';
  const r = Math.round(n * 1e10) / 1e10;
  return String(Math.abs(r) >= 1e12 || (Math.abs(r) < 1e-7 && r !== 0) ? r.toExponential(6) : r);
};

interface Props {
  mode: 'scientific' | 'fourfunction';
}

/** Offline scientific / four-function calculator (no network needed). */
export const LocalCalculator: React.FC<Props> = ({ mode }) => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [ans, setAns] = useState(0);
  const [deg, setDeg] = useState(true);

  const press = (t: string) => {
    if (result && /^[\d.]/.test(t) && expression === '') setResult('');
    setExpression((e) => e + t);
  };
  const calc = () => {
    if (!expression.trim()) return;
    try {
      const v = evaluate(expression, deg, ans);
      const out = fmtNum(v);
      setResult(out);
      if (isFinite(v)) { setAns(v); setExpression(''); }
    } catch {
      setResult('Error');
    }
  };
  const clear = () => { setExpression(''); setResult(''); };
  const back = () => setExpression((e) => e.slice(0, -1));

  const Btn: React.FC<{ label: string; onClick: () => void; kind?: 'num' | 'op' | 'fn' | 'eq' }> = ({ label, onClick, kind = 'num' }) => (
    <button
      onClick={onClick}
      className={`h-11 rounded-none text-sm font-semibold border transition-colors active:scale-95 ${
        kind === 'eq' ? 'bg-accent text-white border-accent col-span-1'
        : kind === 'op' ? 'bg-surface-muted text-ink border-line hover:bg-line'
        : kind === 'fn' ? 'bg-surface text-accent border-line hover:bg-accent-soft'
        : 'bg-surface text-ink border-line hover:bg-surface-muted'
      }`}
    >
      {label}
    </button>
  );

  const sciRows: [string, string][][] = [
    [['sin', 'sin('], ['cos', 'cos('], ['tan', 'tan('], ['ln', 'ln('], ['log', 'log(']],
    [['asin', 'asin('], ['acos', 'acos('], ['atan', 'atan('], ['√', 'sqrt('], ['x²', '^2']],
    [['π', 'pi'], ['e', 'e'], ['xʸ', '^'], ['n!', '!'], ['Ans', 'ans']],
  ];

  return (
    <div className="h-full flex flex-col p-3 gap-3 bg-surface text-ink select-none overflow-y-auto rounded-none">
      <div className="rounded-none border border-line bg-surface-muted p-3 text-right">
        <input
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') calc(); }}
          placeholder="0"
          className="w-full bg-transparent text-right text-lg font-mono outline-none"
          aria-label="Calculator expression"
        />
        <div className="text-2xl font-bold font-mono h-8 truncate">{result}</div>
      </div>

      {mode === 'scientific' && (
        <>
          <div className="flex items-center justify-between text-xs">
            <button onClick={() => setDeg(!deg)} className="px-3 py-1 rounded-none border border-line font-bold">
              {deg ? 'DEG' : 'RAD'}
            </button>
            <span className="text-ink-muted">Offline scientific calculator</span>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {sciRows.flat().map(([label, ins]) => (
              <Btn key={label} label={label} kind="fn" onClick={() => press(ins)} />
            ))}
          </div>
        </>
      )}

      <div className="grid grid-cols-4 gap-1.5">
        <Btn label="C" kind="op" onClick={clear} />
        <Btn label="⌫" kind="op" onClick={back} />
        <Btn label={mode === 'scientific' ? '(' : '%'} kind="op" onClick={() => press(mode === 'scientific' ? '(' : '%')} />
        <Btn label={mode === 'scientific' ? ')' : '÷'} kind="op" onClick={() => press(mode === 'scientific' ? ')' : '/')} />
        {['7', '8', '9'].map((n) => <Btn key={n} label={n} onClick={() => press(n)} />)}
        <Btn label={mode === 'scientific' ? '÷' : '×'} kind="op" onClick={() => press(mode === 'scientific' ? '/' : '*')} />
        {['4', '5', '6'].map((n) => <Btn key={n} label={n} onClick={() => press(n)} />)}
        <Btn label={mode === 'scientific' ? '×' : '−'} kind="op" onClick={() => press(mode === 'scientific' ? '*' : '-')} />
        {['1', '2', '3'].map((n) => <Btn key={n} label={n} onClick={() => press(n)} />)}
        <Btn label={mode === 'scientific' ? '−' : '+'} kind="op" onClick={() => press(mode === 'scientific' ? '-' : '+')} />
        <Btn label="0" onClick={() => press('0')} />
        <Btn label="." onClick={() => press('.')} />
        <Btn label={mode === 'scientific' ? '+' : '±'} kind="op" onClick={() => (mode === 'scientific' ? press('+') : setExpression((e) => (e.startsWith('-') ? e.slice(1) : '-' + e)))} />
        <Btn label="=" kind="eq" onClick={calc} />
      </div>
    </div>
  );
};
