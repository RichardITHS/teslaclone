//Möjliggör Redux
import {createSlice} from '@reduxjs/toolkit'


//Skapar ett state
const initialState = {
    cars: ["Model 3" , "Model Y", "Model S", "Model X", "Solar Roof"]
}

//Skapar en slice
const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars
export default carSlice.reducer
