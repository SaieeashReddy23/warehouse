import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import projectReducer from '../features/project/projectSlice'
import logsReducer from '../features/logsTable/logsSlice'
export const store = configureStore({
  reducer: {
    userState: userReducer,
    projectState: projectReducer,
    logsState: logsReducer,
  },
})
