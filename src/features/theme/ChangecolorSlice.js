import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: "",
}

export const ChangecolorSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    
    changeBackground: (state, action) => {
      state.color += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeBackground } = ChangecolorSlice.actions

export default ChangecolorSlice.reducer