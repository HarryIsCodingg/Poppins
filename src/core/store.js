import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers';



const store = configureStore({
    devTools: true,
    reducer: rootReducer,
})


export default store;
