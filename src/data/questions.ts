export interface Question {
  id: string;
  section: 'psychometric' | 'technical' | 'wiscar';
  category: string;
  question: string;
  type: 'likert' | 'multiple-choice' | 'scenario';
  options?: string[];
  scale?: { min: number; max: number; labels: string[] };
}

export const assessmentQuestions: Question[] = [
  // Psychometric Section
  {
    id: 'psych_1',
    section: 'psychometric',
    category: 'Interest Alignment',
    question: 'I enjoy solving complex technical problems that require step-by-step analysis.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'psych_2',
    section: 'psychometric',
    category: 'Interest Alignment',
    question: 'I find satisfaction in helping others successfully adopt new technologies.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'psych_3',
    section: 'psychometric',
    category: 'Personality Fit',
    question: 'I prefer detailed planning before starting any project.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'psych_4',
    section: 'psychometric',
    category: 'Communication Style',
    question: 'I can explain technical concepts to non-technical people effectively.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'psych_5',
    section: 'psychometric',
    category: 'Resilience',
    question: 'When facing a challenging problem, I persist until I find a solution.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },

  // Technical Section
  {
    id: 'tech_1',
    section: 'technical',
    category: 'General Aptitude',
    question: 'If a sequence goes 2, 6, 18, 54, what comes next?',
    type: 'multiple-choice',
    options: ['108', '162', '216', '270']
  },
  {
    id: 'tech_2',
    section: 'technical',
    category: 'Technical Familiarity',
    question: 'Which of these best describes what an API does?',
    type: 'multiple-choice',
    options: [
      'Stores data in a database',
      'Allows different software systems to communicate',
      'Creates user interfaces',
      'Manages user authentication'
    ]
  },
  {
    id: 'tech_3',
    section: 'technical',
    category: 'Domain-Specific Scenario',
    question: 'A client needs to integrate your product with their existing CRM. What\'s your first step?',
    type: 'multiple-choice',
    options: [
      'Start coding the integration immediately',
      'Understand their current CRM setup and requirements',
      'Recommend they switch CRM systems',
      'Ask the development team to handle it'
    ]
  },
  {
    id: 'tech_4',
    section: 'technical',
    category: 'Problem Solving',
    question: 'A customer reports that data isn\'t syncing properly. Your approach would be:',
    type: 'multiple-choice',
    options: [
      'Tell them to restart their system',
      'Systematically check each step of the data flow',
      'Escalate to the technical team immediately',
      'Assume it\'s a temporary issue'
    ]
  },
  {
    id: 'tech_5',
    section: 'technical',
    category: 'Technical Knowledge',
    question: 'What format is commonly used for data exchange between web services?',
    type: 'multiple-choice',
    options: ['XML', 'JSON', 'CSV', 'All of the above']
  },

  // WISCAR Section
  {
    id: 'wiscar_1',
    section: 'wiscar',
    category: 'Will',
    question: 'I am willing to invest 6-12 months learning new technical skills for this career.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'wiscar_2',
    section: 'wiscar',
    category: 'Interest',
    question: 'The idea of working with clients to implement software solutions excites me.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'wiscar_3',
    section: 'wiscar',
    category: 'Skill',
    question: 'Rate your current project management abilities:',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'] }
  },
  {
    id: 'wiscar_4',
    section: 'wiscar',
    category: 'Cognitive Readiness',
    question: 'How quickly do you typically adapt to new software tools?',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Very Slowly', 'Slowly', 'Moderately', 'Quickly', 'Very Quickly'] }
  },
  {
    id: 'wiscar_5',
    section: 'wiscar',
    category: 'Ability to Learn',
    question: 'I actively seek feedback to improve my performance.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'wiscar_6',
    section: 'wiscar',
    category: 'Real-World Alignment',
    question: 'I understand that Implementation Specialists often work with frustrated customers during software transitions.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  }
];

export const getQuestionsBySection = (section: string) => {
  return assessmentQuestions.filter(q => q.section === section);
};

export const getTotalQuestions = () => assessmentQuestions.length;