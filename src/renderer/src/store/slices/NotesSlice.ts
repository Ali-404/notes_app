import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  notes: [],
}

const NotesSlice = createSlice({
  initialState,
  name: 'notes',
  reducers: {

  }
})


// hadi rdha {} blast actions
export const actions =  NotesSlice.actions;
