import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const baseUrl = 'https://fakestoreapi.com';

export const fetchCategories =createAsyncThunk('categories/getAllCategories', async() => {
    try {
         const response = await axios.get(`${baseUrl}/products/categories`)
         console.log(response.data)
         return response.data
    } catch (error) {
     console.log(error)
    }
 })


const initialState = {
    categories : [],
    filterCategories : []
}

const categorySlice = createSlice({
    name : 'categories',
    initialState,
    reducers : {
        filterCategories : (state, action) => {
            state.filterCategories = state.categories.filter(
                (category) => category === action.payload)
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.filterCategories = action.payload;
        })
    }
})

export default categorySlice.reducer

