import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

export const fetchProducts =createAsyncThunk('products/getAllProducts', async() => {
   try {
        const response = await axios.get(`${baseURL}/products`)
        // console.log(response.data)
        return response.data
   } catch (error) {
    console.log(error)
   }
})

const initialState = {
    products : [],
    filterCategory : []
} as any


const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export default productSlice.reducer