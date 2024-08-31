import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destinations: [
    { name: "karachi", days: 20, fact: "the city of light" },
    { name: "lahore", days: 40, fact: "lahore is the most beautiful place" },
    { name: "swat", days: 30, fact: "the city of flowers" },
    { name: "Naran Kagan", days: 50, fact: "such a haven" },
    { name: "kalam", days: 30, fact: "most beautiful place on earth" }
  ],
  destinationSelacted :null
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    destinationClicked :(state, action)=>{
        state.destinationSelacted = action.payload
    },
    resetDestination :(state)=>{
        state.destinationSelacted=null;
    }
  }
});

export const {destinationClicked, resetDestination} = destinationSlice.actions; 
export const destinationReducer = destinationSlice.reducer;
