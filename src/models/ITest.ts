export interface IQuestion {
  id: string;
  type: string;
  question: string;
  answers: string[];
  trueAnswers: string[];
  img?: string;
  userAnswers?: string[];
}

export interface ICurrentQuestion {
  currentUserAnswer: string[] | undefined;
  setCurrentUserAnswer: (currentUserAnswer: string[]) => void;
  answers: string[];
}

export interface IThresholds {
  poor: {
    title: string;
    description: string;
    recommendation: string;
  },
  average: {
    title: string;
    description: string;
    recommendation: string;
  },
  good: {
    title: string;
    description: string;
    recommendation: string;
  }
}