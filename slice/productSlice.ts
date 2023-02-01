import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// interface Product {
//     id : number,
//     title : string,
//     categoryId : string
// }

// interface ProductState {
//     products : Product[],
// }

const baseURL = 'https://fakestoreapi.com';

// fetch product 
export const fetchProducts =createAsyncThunk('products/getAllProducts', async() => {
   try {
        const response = await axios.get(`${baseURL}/products`)
        console.log(response.data)
        return response.data
   } catch (error) {
    console.log(error)
   }
})

// fetch product by category
export const fetchProductsByCategory = createAsyncThunk('products/fetchByCategory', async(categoryId : string) => {
    try {
        const response = await axios.get(`${baseURL}/products/category/${categoryId}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    products : [],
    byCategory : {} as [key : string]
} as any


const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        }),
        builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            state.byCategory[action.meta.arg] = action.payload
        })
    }
})

export default productSlice.reducer