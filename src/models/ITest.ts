export interface IQuestion{
    id: string;
    type: string;
    question: string;
    answers: string[];
    trueAnswers: string[];
    img?: string;
    userAnswers?: string[];
}