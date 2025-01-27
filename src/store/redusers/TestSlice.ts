import { createSlice } from "@reduxjs/toolkit";
import { IQuestion } from "../../models/ITest";


interface TestState {
    test: IQuestion[]
    isLoading: boolean
    error: ''
    activeQuestionId: string | null
}

const initialState: TestState = {
    test: [],
    isLoading: false,
    error: '',
    activeQuestionId: null
}

export const testSlice = createSlice({
    name: 'testSlice',
    initialState,
    reducers: {
        updateTest(state) {
            state.isLoading = true;
        },
        updateTestSuccess(state, action){
            state.test = action.payload.test;
            state.isLoading = false;
        },
        updateTestError(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        changeActiveQuestion(state, action) {
            state.activeQuestionId = action.payload;
        },
        saveAnswers(state, action) {
            const questions = [...state.test];
            const currentQuestion = questions.findIndex(question => question.id === action.payload.id);
            questions[currentQuestion].userAnswers = action.payload.answers;
            state.test = questions;
        }
    }
})

export default testSlice.reducer;