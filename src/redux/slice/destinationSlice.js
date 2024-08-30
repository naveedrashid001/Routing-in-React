import { createSlice } from '@reduxjs/toolkit'

const initialState =()=>{
  
  return {
    destination :[
        {
            name:"karachi",
            days: 20,
            fact: "the city of light"
        },
        {
            name:"lahore",
            days: 40,
            fact: "lahore is most butifull place"
        },
        {
            name:"swat",
            days: 30,
            fact: "the city of flower"
        },
        {
            name:"Naran Kagan",
            days: 50,
            fact: "such a haven"
        },
        {
            name:"kalam",
            days: 30,
            fact: "most beautiful place in the earth"
        }
    ]
  }
}
export const destinationSlice = createSlice ({
    name: "destination",
    initialState:initialState,
    reducers:{}
})

export const destinationReducer = destinationSlice.reducer;
