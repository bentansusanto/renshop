import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const baseURL = "https://fakestoreapi.com/products";

export const fetchProducts =createAsyncThunk('products/getAllProducts', async() => {
   try {
        const response = await axios.get(baseURL)
        console.log(response.data)
        return response.data
   } catch (error) {
    console.log(error)
   }
})

const initialState = {
    entities : []
} as any


const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.entities = action.payload
        })
    }
})

export default productSlice.reducer