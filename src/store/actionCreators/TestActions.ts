import { Dispatch } from '@reduxjs/toolkit';
import { testSlice } from '../redusers/TestSlice';
import { fetchFakeData } from '../../api/test';




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


