import { IQuestion } from "../models/ITest";

export const calculateResultValue = (test: IQuestion[]) => {
    let flag = true
    return test.reduce((sumValue, currentQuestion) => {
        if (currentQuestion.userAnswers) {
          switch (currentQuestion.type) {
            case 'radio':
              if (currentQuestion.userAnswers[0] === currentQuestion.trueAnswers[0]) {
                sumValue++;
              }
              break;
            case 'checkbox':
              flag = currentQuestion.trueAnswers.every((answer) => 
                currentQuestion.userAnswers?.includes(answer)) 
                && currentQuestion.trueAnswers.length === currentQuestion.userAnswers.length
              if (flag) sumValue++
              break;
            case 'sequence':
              flag = currentQuestion.trueAnswers.every((answer, index) => 
                currentQuestion.trueAnswers[index] === answer 
              )
              if (flag) sumValue++
          }
        }
        return sumValue
      }, 0)
}