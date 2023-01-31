import  {configureStore} from '@reduxjs/toolkit'
import productSlice from '../slice/productSlice'
import categorySlice from '../slice/categorySlice';

export function makeStore(){
    return configureStore({
        reducer : {
            product : productSlice,
            category : categorySlice
        }
    })
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;