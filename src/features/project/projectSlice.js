import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  projects: [],
  selectedProject: null,
  isLoading: false,
  isError: false,
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    selectProject: (state, action) => {},
  },
})

export const { selectProject } = projectSlice.actions

export default projectSlice.reducer
