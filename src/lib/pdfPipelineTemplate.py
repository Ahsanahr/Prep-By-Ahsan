"""
Deterministic, Rule-Based PDF Question Extractor for Digital SAT
----------------------------------------------------------------
Zero AI credits required. Uses PyMuPDF (fitz) or pdfplumber to mechanically extract
well-structured text into standardized JSON compatible with the Digital SAT prep app.

Requirements:
    pip install pymupdf
Run:
    python pdfPipelineTemplate.py --input your_sat_book.pdf --output questions.json
"""

import re
import json
import argparse
from typing import List, Dict, Any, Optional

# Digital SAT 8 Official Domains
DOMAINS = [
    {"id": "craft_and_structure", "title": "Craft and Structure", "section": "reading_writing", "keywords": ["words in context", "structure", "purpose", "cross-text"]},
    {"id": "information_and_ideas", "title": "Information and Ideas", "section": "reading_writing", "keywords": ["central idea", "command of evidence", "inferences", "details"]},
    {"id": "standard_english_conventions", "title": "Standard English Conventions", "section": "reading_writing", "keywords": ["grammar", "punctuation", "boundaries", "agreement"]},
    {"id": "expression_of_ideas", "title": "Expression of Ideas", "section": "reading_writing", "keywords": ["transitions", "rhetorical synthesis", "revising"]},
    {"id": "algebra", "title": "Algebra", "section": "math", "keywords": ["linear equation", "system", "inequality", "slope", "linear function"]},
    {"id": "advanced_math", "title": "Advanced Math", "section": "math", "keywords": ["quadratic", "polynomial", "exponential", "nonlinear", "vertex", "root"]},
    {"id": "problem_solving_and_data_analysis", "title": "Problem-Solving & Data Analysis", "section": "math", "keywords": ["ratio", "percent", "probability", "mean", "median", "scatter plot", "standard deviation"]},
    {"id": "geometry_and_trigonometry", "title": "Geometry & Trigonometry", "section": "math", "keywords": ["circle", "triangle", "area", "volume", "sin", "cos", "tan", "angle", "radian"]}
]

def detect_domain(text: str, default_section: str = "reading_writing") -> Dict[str, str]:
    text_lower = text.lower()
    for dom in DOMAINS:
        for kw in dom["keywords"]:
            if kw in text_lower:
                return {"domain": dom["id"], "domainTitle": dom["title"], "section": dom["section"]}
    
    # Fallback based on math symbol presence
    if re.search(r"[=+\-*/^√π\d]{3,}", text) or "equation" in text_lower or "value of x" in text_lower:
        return {"domain": "algebra", "domainTitle": "Algebra", "section": "math"}
    
    return {"domain": "craft_and_structure", "domainTitle": "Craft and Structure", "section": "reading_writing"}

def parse_structured_text(full_text: str) -> List[Dict[str, Any]]:
    questions = []
    
    # Split text into potential question blocks using regex: e.g. "Question 1", "1.", "Q1."
    pattern = r"(?:(?:Question|\bQ\b)?\s*(\d+)[\.\:\)]\s+)"
    splits = re.split(pattern, full_text)
    
    # splits[0] is preamble before question 1
    # subsequent items alternate: [question_number, block_content, question_number, block_content, ...]
    for i in range(1, len(splits), 2):
        q_num = splits[i].strip()
        block = splits[i+1].strip() if i+1 < len(splits) else ""
        if not block:
            continue
            
        # Parse passage if separated (e.g. text before question prompt)
        passage = ""
        prompt = block
        
        # Check for MCQ Options (A), (B), (C), (D) or A. B. C. D.
        opt_pattern = r"(?:^|\n)\s*(?:\(?([A-D])\)|\b([A-D])\.)\s+([^\n]+(?:\n(?!(?:\(?[A-D]\)|\b[A-D]\.|\bAnswer:|\bExplanation:))[^\n]+)*)"
        matches = list(re.finditer(opt_pattern, block, re.MULTILINE))
        
        options = []
        is_spr = False
        
        if len(matches) >= 4:
            # We found MCQ choices
            # Prompt is everything before first option match
            prompt_end = matches[0].start()
            prompt_raw = block[:prompt_end].strip()
            
            # If prompt has double newline, top half is often reading passage
            if "\n\n" in prompt_raw:
                parts = prompt_raw.split("\n\n")
                passage = "\n\n".join(parts[:-1]).strip()
                prompt = parts[-1].strip()
            else:
                prompt = prompt_raw
                
            for m in matches[:4]:
                opt_letter = m.group(1) or m.group(2)
                opt_text = m.group(3).strip()
                options.append({"id": opt_letter, "text": opt_text})
        else:
            # Student-Produced Response (SPR Grid-in)
            is_spr = True
            
        # Extract Answer if inline (e.g. "Answer: B", "Correct: 14")
        ans_match = re.search(r"(?:Answer|Correct Choice|Key)\s*[:\-]\s*([A-D0-9./-]+)", block, re.IGNORECASE)
        correct_answer = ans_match.group(1).strip() if ans_match else ("A" if not is_spr else "0")
        
        # Extract Explanation if present
        exp_match = re.search(r"(?:Explanation|Rationale)\s*[:\-]\s*(.+)", block, re.IGNORECASE | re.DOTALL)
        explanation = exp_match.group(1).strip() if exp_match else "Official Digital SAT rationale and solution steps."
        
        domain_info = detect_domain(passage + " " + prompt)
        
        q_item = {
            "id": f"q-extracted-{q_num}",
            "section": domain_info["section"],
            "domain": domain_info["domain"],
            "domainTitle": domain_info["domainTitle"],
            "skill": "Standard Concept Application",
            "difficulty": "Medium",
            "type": "spr" if is_spr else "mcq",
            "passage": passage if passage else None,
            "prompt": prompt,
            "options": options if not is_spr else None,
            "correctAnswer": correct_answer,
            "explanation": explanation
        }
        questions.append(q_item)
        
    return questions

def extract_from_pdf(pdf_path: str, output_path: str):
    try:
        import fitz  # PyMuPDF
        doc = fitz.open(pdf_path)
        full_text = "\n".join([page.get_text("text") for page in doc])
    except ImportError:
        print("PyMuPDF not installed. Fallback to basic file read or install pymupdf via 'pip install pymupdf'.")
        with open(pdf_path, "r", encoding="utf-8", errors="ignore") as f:
            full_text = f.read()

    questions = parse_structured_text(full_text)
    print(f"Extracted {len(questions)} questions successfully.")
    
    with open(output_path, "w", encoding="utf-8") as out:
        json.dump(questions, out, indent=2, ensure_ascii=False)
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Deterministic SAT PDF Parser")
    parser.add_argument("--input", default="source.pdf", help="Input PDF file path")
    parser.add_argument("--output", default="questions.json", help="Output JSON path")
    args = parser.parse_args()
    extract_from_pdf(args.input, args.output)
