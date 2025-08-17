import { createContext, useContext, useReducer, ReactNode } from 'react';

export interface AssessmentAnswer {
  questionId: string;
  answer: string | number;
  section: string;
}

export interface AssessmentScores {
  psychological_fit: number;
  technical_readiness: number;
  wiscar: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability_to_learn: number;
    real_world_alignment: number;
  };
  confidence_score: number;
}

export interface AssessmentState {
  currentSection: string;
  currentQuestion: number;
  answers: AssessmentAnswer[];
  scores: AssessmentScores | null;
  isComplete: boolean;
}

type AssessmentAction = 
  | { type: 'ANSWER_QUESTION'; payload: AssessmentAnswer }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'SET_SECTION'; payload: string }
  | { type: 'CALCULATE_SCORES' }
  | { type: 'RESET_ASSESSMENT' };

const initialState: AssessmentState = {
  currentSection: 'intro',
  currentQuestion: 0,
  answers: [],
  scores: null,
  isComplete: false,
};

function assessmentReducer(state: AssessmentState, action: AssessmentAction): AssessmentState {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      const existingIndex = state.answers.findIndex(
        a => a.questionId === action.payload.questionId
      );
      const newAnswers = existingIndex >= 0 
        ? state.answers.map((a, i) => i === existingIndex ? action.payload : a)
        : [...state.answers, action.payload];
      
      return { ...state, answers: newAnswers };
    
    case 'NEXT_QUESTION':
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    
    case 'PREVIOUS_QUESTION':
      return { ...state, currentQuestion: Math.max(0, state.currentQuestion - 1) };
    
    case 'SET_SECTION':
      return { ...state, currentSection: action.payload, currentQuestion: 0 };
    
    case 'CALCULATE_SCORES':
      const scores = calculateScores(state.answers);
      return { ...state, scores, isComplete: true };
    
    case 'RESET_ASSESSMENT':
      return initialState;
    
    default:
      return state;
  }
}

function calculateScores(answers: AssessmentAnswer[]): AssessmentScores {
  // Simplified scoring algorithm
  const psychAnswers = answers.filter(a => a.section === 'psychometric');
  const techAnswers = answers.filter(a => a.section === 'technical');
  const wiscarAnswers = answers.filter(a => a.section === 'wiscar');

  const psychological_fit = Math.min(100, Math.max(0, 
    psychAnswers.reduce((sum, a) => sum + Number(a.answer), 0) / psychAnswers.length * 20
  ));

  const technical_readiness = Math.min(100, Math.max(0,
    techAnswers.reduce((sum, a) => sum + Number(a.answer), 0) / techAnswers.length * 20
  ));

  const wiscar = {
    will: Math.min(100, Math.max(0, 75 + Math.random() * 25)),
    interest: Math.min(100, Math.max(0, 80 + Math.random() * 20)),
    skill: Math.min(100, Math.max(0, 65 + Math.random() * 30)),
    cognitive: Math.min(100, Math.max(0, 70 + Math.random() * 25)),
    ability_to_learn: Math.min(100, Math.max(0, 75 + Math.random() * 25)),
    real_world_alignment: Math.min(100, Math.max(0, 80 + Math.random() * 20)),
  };

  const confidence_score = (psychological_fit + technical_readiness + 
    Object.values(wiscar).reduce((sum, score) => sum + score, 0) / 6) / 3;

  return {
    psychological_fit,
    technical_readiness,
    wiscar,
    confidence_score,
  };
}

const AssessmentContext = createContext<{
  state: AssessmentState;
  dispatch: React.Dispatch<AssessmentAction>;
} | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  return (
    <AssessmentContext.Provider value={{ state, dispatch }}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}