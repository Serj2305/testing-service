import { Dispatch } from '@reduxjs/toolkit';
import mockImg from '../../assets/react.svg'
import { IQuestion } from '../../models/ITest';
import { testSlice } from '../redusers/TestSlice';


const fetchFakeData = (): Promise<IQuestion[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          type: 'radio',
          question: 'Если персонаж делает 5 шагов за одну секунду, сколько шагов он сделает за 12 секунд? Выбери один верный вариант.',
          answers: ['17 шагов', '52 шага', "60 шагов", '7 шагов'],
          trueAnswers: ['60 шагов']
        },
        {
          id: '2',
          type: 'checkbox',
          question: 'Что из этого может быть полезно для создания игры? Выбери все верные варианты ответов.',
          answers: ['Таймер', 'Разноцветные фоны', "Счетчик ответов", 'Длинные тексты правил'],
          trueAnswers: ['Таймер', 'Разноцветные фоны', "Счетчик ответов"]
        },
        {
          id: '3',
          type: 'sequence',
          question: 'Расположи шаги в правильном порядке, чтобы персонаж допрыгнул до звезды.',
          answers: ['Нажать на кнопку запуска.', 'Переместиться на 10 шагов вперёд.', "Подпрыгнуть на 5 шагов вверх.", 'Повернуть в сторону звезды.'],
          trueAnswers: ['Нажать на кнопку запуска.', 'Повернуть в сторону звезды.', "Переместиться на 10 шагов вперёд.", "Подпрыгнуть на 5 шагов вверх."],
          img: mockImg
        },
      ]);
    }, 1000);
  });
};

export async function loadTest(dispatch: Dispatch) {
  try {
    dispatch(testSlice.actions.updateTest())
    const test = await fetchFakeData();
    dispatch(testSlice.actions.updateTestSuccess({test}))
    dispatch(testSlice.actions.changeActiveQuestion(test[0].id))
  } catch (error) {
    dispatch(testSlice.actions.updateTestError(error))
  }
}


