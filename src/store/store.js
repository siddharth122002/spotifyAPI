import {configureStore} from '@reduxjs/toolkit'
import tokenReducer from '../reducers/TokenSlice'
const store = configureStore({
    reducer:{
        tokenset:tokenReducer
    }
});

export default store;