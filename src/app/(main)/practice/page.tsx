'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useExamStore } from '@/store/examStore';
import { useQuestionBank } from '@/lib/useQuestionBank';
import { TestConfig } from '@/types/sat';
import { trackFeatureUsage } from '@/lib/analytics';
import { LoadingScreen } from '@/components/LoadingScreen';
import { PageHeader, Card, Button } from '@/components/ui';
import { 
  Square, 
  CheckSquare, 
  MinusSquare,
  Settings2, 
  Clock, 
  HelpCircle, 
  ArrowRight, 
  ChevronDown, 
  ChevronRight,
} from 'lucide-react';

type SubTopic = { id: string; name: string };
type Topic = { id: string; name: string; subTopics: SubTopic[] };
type Subject = { id: 'rw' | 'math'; name: string; description: string; topics: Topic[] };

const SUBJECTS: Subject[] = [
  {
    id: 'rw',
    name: 'Reading & Writing',
    description: 'Master reading comprehension, grammar, and vocabulary.',
    topics: [
      {
        id: 'craft_structure',
        name: 'Craft and Structure',
        subTopics: [
          { id: 'words_in_context', name: 'Words in Context' },
          { id: 'text_structure', name: 'Text Structure & Purpose' },
          { id: 'cross_text', name: 'Cross-Text Connections' }
        ]
      },
      {
        id: 'info_ideas',
        name: 'Information and Ideas',
        subTopics: [
          { id: 'central_ideas', name: 'Central Ideas & Details' },
          { id: 'command_evidence', name: 'Command of Evidence' },
          { id: 'inferences', name: 'Inferences' }
        ]
      },
      {
        id: 'conventions',
        name: 'Standard English Conventions',
        subTopics: [
          { id: 'boundaries', name: 'Boundaries (Punctuation)' },
          { id: 'form_structure', name: 'Form, Structure, and Sense' }
        ]
      },
      {
        id: 'expression',
        name: 'Expression of Ideas',
        subTopics: [
          { id: 'transitions', name: 'Transitions' },
          { id: 'rhetorical_synthesis', name: 'Rhetorical Synthesis' }
        ]
      }
    ]
  },
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Master algebra, geometry, and problem-solving.',
    topics: [
      {
        id: 'algebra',
        name: 'Algebra',
        subTopics: [
          { id: 'linear_eq_one', name: 'Linear equations in one var' },
          { id: 'linear_eq_two', name: 'Linear equations in two vars' },
          { id: 'linear_functions', name: 'Linear functions' },
          { id: 'systems_linear', name: 'Systems of linear equations' },
          { id: 'linear_ineq', name: 'Linear inequalities' }
        ]
      },
      {
        id: 'advanced_math',
        name: 'Advanced Math',
        subTopics: [
          { id: 'equivalent_expr', name: 'Equivalent expressions' },
          { id: 'nonlinear_eq', name: 'Nonlinear equations' },
          { id: 'nonlinear_func', name: 'Nonlinear functions' }
        ]
      },
      {
        id: 'problem_solving',
        name: 'Problem-Solving & Data Analysis',
        subTopics: [
          { id: 'ratios_rates', name: 'Ratios, rates, proportions' },
          { id: 'percentages', name: 'Percentages' },
          { id: 'unit_conversion', name: 'Unit conversion' },
          { id: 'data_interp', name: 'Data interpretation' },
          { id: 'stats_prob', name: 'Statistics & probability' }
        ]
      },
      {
        id: 'geometry_trig',
        name: 'Geometry & Trigonometry',
        subTopics: [
          { id: 'area_volume', name: 'Area & volume formulas' },
          { id: 'lines_angles', name: 'Lines, angles, triangles' },
          { id: 'circles', name: 'Circles' },
          { id: 'right_trig', name: 'Right triangle trigonometry' }
        ]
      }
    ]
  }
];

import { getSolvedIds } from '@/lib/solvedStore';

export default function PracticePage() {
  const [activeSubject, setActiveSubject] = useState<'rw' | 'math' | null>(null);
  const [expandedTopics, setExpandedTopics] = useState<string[]>([]);
  const [selectedSubTopics, setSelectedSubTopics] = useState<string[]>([]);
  
  const [showOptions, setShowOptions] = useState(false);
  const [explanationsOn, setExplanationsOn] = useState(true);
  const [saveTimeOn, setSaveTimeOn] = useState(true);
  const [includeSolved, setIncludeSolved] = useState(true);

  const handleInteraction = (subjectId: 'rw' | 'math') => {
    if (activeSubject !== subjectId) {
      setActiveSubject(subjectId);
      setSelectedSubTopics([]);
      // We don't necessarily need to collapse topics, but we reset selections to enforce one subject at a time
    }
  };

  const toggleTopicExpand = (topicId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedTopics(prev => 
      prev.includes(topicId) ? prev.filter(id => id !== topicId) : [...prev, topicId]
    );
  };

  const toggleSubTopic = (subjectId: 'rw' | 'math', subTopicId: string) => {
    handleInteraction(subjectId);
    setSelectedSubTopics(prev => 
      prev.includes(subTopicId) ? prev.filter(id => id !== subTopicId) : [...prev, subTopicId]
    );
  };

  const toggleFullTopic = (subjectId: 'rw' | 'math', topic: Topic, e: React.MouseEvent) => {
    e.stopPropagation();
    handleInteraction(subjectId);
    
    const allIds = topic.subTopics.map(st => st.id);
    const areAllSelected = allIds.every(id => selectedSubTopics.includes(id));
    
    if (areAllSelected) {
      // Unselect all
      setSelectedSubTopics(prev => prev.filter(id => !allIds.includes(id)));
    } else {
      // Select all
      setSelectedSubTopics(prev => {
        const withoutCurrent = prev.filter(id => !allIds.includes(id));
        return [...withoutCurrent, ...allIds];
      });
    }
  };

  const getTopicSelectionState = (topic: Topic) => {
    const allIds = topic.subTopics.map(st => st.id);
    const selectedCount = allIds.filter(id => selectedSubTopics.includes(id)).length;
    
    if (selectedCount === 0) return 'none';
    if (selectedCount === allIds.length) return 'all';
    return 'partial';
  };

  const handleStartClick = () => {
    if (selectedSubTopics.length === 0) {
      alert("Please select at least one topic to practice.");
      return;
    }
    setShowOptions(true);
  };

  const { questions: bankQuestions } = useQuestionBank();
  const { start } = useExamStore();
  const router = useRouter();
  const [isStarting, setIsStarting] = useState(false);

  const handleBeginPractice = () => {
    setIsStarting(true);
    let pool = [...bankQuestions];
    if (activeSubject) {
      const sectionName = activeSubject === 'rw' ? 'reading_writing' : 'math';
      pool = pool.filter(q => q.section === sectionName);
    }
    
    // Map selectedSubTopics (from hardcoded UI) to actual skill strings if possible.
    const validDomains = selectedSubTopics.map(s => {
       if (['linear_eq_one', 'linear_eq_two', 'linear_functions', 'systems_linear', 'linear_ineq'].includes(s)) return 'algebra';
       if (s === 'words_in_context' || s === 'text_structure' || s === 'cross_text') return 'craft_and_structure';
       if (s.includes('ideas') || s.includes('evidence') || s.includes('inferences')) return 'information_and_ideas';
       if (s === 'boundaries' || s === 'form_structure') return 'standard_english_conventions';
       if (s === 'transitions' || s === 'rhetorical_synthesis') return 'expression_of_ideas';
       if (['equivalent_expr', 'nonlinear_eq', 'nonlinear_func'].includes(s)) return 'advanced_math';
       if (['ratios_rates', 'percentages', 'unit_conversion', 'data_interp', 'stats_prob'].includes(s)) return 'problem_solving_and_data_analysis';
       if (['area_volume', 'lines_angles', 'circles', 'right_trig'].includes(s)) return 'geometry_and_trigonometry';
       return s; // Fallback
    });
    
    // Only include questions that match one of the mapped domains
    if (validDomains.length > 0) {
      pool = pool.filter(q => validDomains.includes(q.domain) || validDomains.includes(q.domain.replace(/_and_/g, '_')));
    }

    if (!includeSolved) {
      const solvedIds = getSolvedIds();
      pool = pool.filter(q => !solvedIds.has(q.id));
    }

    // Shuffle and pick all questions for a practice session
    const finalQuestions = pool.sort(() => 0.5 - Math.random());

    if (finalQuestions.length === 0) {
      alert("No questions found for the selected topics in the database yet. Please try different topics or check database.");
      return;
    }

    const testConfig: TestConfig = {
      mode: 'practice',
      title: 'Practice Zone',
      section: activeSubject === 'rw' ? 'reading_writing' : 'math',
      domains: [],
      explanationMode: explanationsOn ? 'instant' : 'off',
      timerMode: 'untimed',
      timeLimitSeconds: 0,
      questionCount: finalQuestions.length,
      moduleCount: 1,
      layoutStyle: activeSubject === 'rw' ? 'split' : 'single',
      allowFlagging: false,
      trackTime: saveTimeOn,
      showAnswerFeedback: true, // Always true for Practice Mode
    };

    trackFeatureUsage('practice_started', { section: testConfig.section, questions: finalQuestions.length });
    start(finalQuestions, testConfig);
    router.push(`/practice-session`);
  };

  if (isStarting) {
    return (
      <LoadingScreen
        fullPage={true}
        label="Preparing Practice Session..."
        sublabel="Selecting targeted questions from the official bank and loading player."
      />
    );
  }

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <PageHeader 
        title="Practice Section" 
        description="Select domains to practice. Note: You can only practice one Subject (Reading & Writing OR Math) at a time." 
      />

      {!showOptions ? (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <div className="grid md:grid-cols-2 gap-8">
            {SUBJECTS.map(subject => {
              const isActive = activeSubject === subject.id || activeSubject === null;
              
              return (
                <Card 
                  key={subject.id} 
                  className={`p-6 flex flex-col h-full border-2 transition-colors ${
                    activeSubject === subject.id 
                      ? 'border-accent shadow-md bg-surface' 
                      : 'border-line hover:border-accent/40 bg-surface'
                  } ${!isActive ? 'opacity-60 grayscale-[30%]' : ''}`}
                >
                  <h2 className="text-xl font-bold text-ink mb-2">{subject.name}</h2>
                  <p className="text-sm text-ink-muted mb-6">{subject.description}</p>
                  
                  <div className="space-y-3 flex-grow">
                    {subject.topics.map(topic => {
                      const isExpanded = expandedTopics.includes(topic.id);
                      const selectionState = getTopicSelectionState(topic);
                      
                      return (
                        <div key={topic.id} className="border border-line rounded-md bg-bg overflow-hidden">
                          {/* TOPIC HEADER */}
                          <div className={`flex items-center justify-between p-3 transition-colors ${
                            selectionState !== 'none' ? 'bg-accent/5' : 'hover:bg-surface-muted'
                          }`}>
                            
                            {/* Checkbox + Title (Clickable to select all) */}
                            <div 
                              className="flex items-center cursor-pointer flex-1"
                              onClick={(e) => toggleFullTopic(subject.id, topic, e)}
                            >
                              <div className="mr-3">
                                {selectionState === 'all' && <CheckSquare className="w-5 h-5 text-accent" />}
                                {selectionState === 'partial' && <MinusSquare className="w-5 h-5 text-accent" />}
                                {selectionState === 'none' && <Square className="w-5 h-5 text-ink-muted" />}
                              </div>
                              <span className={`font-semibold text-sm ${selectionState !== 'none' ? 'text-ink' : 'text-ink-muted'}`}>
                                {topic.name}
                              </span>
                            </div>

                            {/* Expand Button */}
                            <button 
                              onClick={(e) => toggleTopicExpand(topic.id, e)}
                              className="p-1 text-ink-muted hover:text-ink rounded-full hover:bg-surface-muted transition-colors"
                            >
                              {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                            </button>
                          </div>

                          {/* SUB-TOPICS LIST */}
                          {isExpanded && (
                            <div className="border-t border-line bg-surface p-2 pl-4 space-y-1">
                              {topic.subTopics.map(subTopic => {
                                const isSelected = selectedSubTopics.includes(subTopic.id);
                                return (
                                  <div 
                                    key={subTopic.id}
                                    onClick={() => toggleSubTopic(subject.id, subTopic.id)}
                                    className="flex items-center p-2 rounded cursor-pointer hover:bg-surface-muted transition-colors"
                                  >
                                    <div className="mr-3">
                                      {isSelected ? (
                                        <CheckSquare className="w-4 h-4 text-accent" />
                                      ) : (
                                        <Square className="w-4 h-4 text-ink-muted/60" />
                                      )}
                                    </div>
                                    <span className={`text-sm ${isSelected ? 'font-medium text-ink' : 'text-ink-muted'}`}>
                                      {subTopic.name}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-end pt-4 border-t border-line">
            <Button 
              size="lg" 
              onClick={handleStartClick}
              disabled={selectedSubTopics.length === 0}
              className="px-8 flex items-center space-x-2"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
          <Card className="p-8 shadow-md border-line">
            <div className="flex items-center space-x-3 mb-6 border-b border-line pb-4">
              <Settings2 className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-ink">Practice Options</h2>
            </div>
            
            <p className="text-sm text-ink-muted mb-8">
              Configure how you want to experience this practice session. You have selected {selectedSubTopics.length} topic(s).
            </p>

            <div className="space-y-6">
              {/* Option: Explanations */}
              <div 
                className="flex items-start justify-between p-5 border border-line rounded-lg hover:border-accent/50 transition-colors cursor-pointer"
                onClick={() => setExplanationsOn(!explanationsOn)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full mt-0.5 ${explanationsOn ? 'bg-accent/20 text-accent' : 'bg-surface-muted text-ink-muted'}`}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">Instant Explanations</h3>
                    <p className="text-sm text-ink-muted mt-1">Show the correct answer and detailed explanation immediately after you answer each question.</p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0 pt-2">
                  <div className={`w-12 h-6 rounded-full transition-colors relative ${explanationsOn ? 'bg-accent' : 'bg-surface-muted border border-line'}`}>
                    <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${explanationsOn ? 'translate-x-6' : 'translate-x-0'}`} />
                  </div>
                </div>
              </div>

              {/* Option: Save Time */}
              <div 
                className="flex items-start justify-between p-5 border border-line rounded-lg hover:border-accent/50 transition-colors cursor-pointer"
                onClick={() => setSaveTimeOn(!saveTimeOn)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full mt-0.5 ${saveTimeOn ? 'bg-accent/20 text-accent' : 'bg-surface-muted text-ink-muted'}`}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">Track Time per Question</h3>
                    <p className="text-sm text-ink-muted mt-1">Record how long you spend on each question to help analyze your pacing.</p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0 pt-2">
                  <div className={`w-12 h-6 rounded-full transition-colors relative ${saveTimeOn ? 'bg-accent' : 'bg-surface-muted border border-line'}`}>
                    <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${saveTimeOn ? 'translate-x-6' : 'translate-x-0'}`} />
                  </div>
                </div>
              </div>

              {/* Option: Solved Filter */}
              <div 
                className="flex items-start justify-between p-5 border border-line rounded-lg hover:border-accent/50 transition-colors cursor-pointer"
                onClick={() => setIncludeSolved(!includeSolved)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full mt-0.5 ${includeSolved ? 'bg-accent/20 text-accent' : 'bg-surface-muted text-ink-muted'}`}>
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">Include Solved Questions</h3>
                    <p className="text-sm text-ink-muted mt-1">When turned on, you will see questions you have previously solved. Turn off for only unseen/unsolved questions.</p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0 pt-2">
                  <div className={`w-12 h-6 rounded-full transition-colors relative ${includeSolved ? 'bg-accent' : 'bg-surface-muted border border-line'}`}>
                    <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${includeSolved ? 'translate-x-6' : 'translate-x-0'}`} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => setShowOptions(false)}
              >
                Back to Topics
              </Button>
              <Button 
                size="lg" 
                onClick={handleBeginPractice}
                className="px-8 shadow-sm"
              >
                Start Practice
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
