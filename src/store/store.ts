import { combineReducers, configureStore } from "@reduxjs/toolkit";
import testSlice from "./redusers/TestSlice";



const rootReducer = combineReducers({
  testSlice
})


export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type Store = ReturnType<typeof setupStore>
export type Dispatch = Store['dispatch']