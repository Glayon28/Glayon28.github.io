export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctAnswerId: string;
}

export interface Quiz {
  id: string;
  name: string;
  questions: Question[];
}

export interface ResultProps {
  score: number;
  total: number;
  time: number;
  onRestart: () => void;
}

export interface QuizProps {
  quiz: Quiz;
  onComplete: (score: number, time: number) => void;
  onLeave: () => void;
}

export interface QuestionFormProps {
  question: Question;
  onChange: (question: Question) => void;
  onDelete: () => void;
}
