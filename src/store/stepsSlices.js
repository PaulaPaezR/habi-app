import { createSlice } from '@reduxjs/toolkit';

const initialState = () => ({
  fullName: null, //string
  email: null, //email
  address: null, //string
  floor: null, //number
  features: null, //array
});

const stepsSlices = createSlice({
  name: 'steps',
  initialState: initialState(),
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setFloor: (state, action) => {
      state.floor = action.payload;
    },
    setFeatures: (state, action) => {
      state.features = action.payload;
    },
    clearData: (state) => initialState(),
  },
});

export const reducer = stepsSlices.reducer;
export const { setFullName, setEmail, setAddress, setFloor, setFeatures, clearData } = stepsSlices.actions;
