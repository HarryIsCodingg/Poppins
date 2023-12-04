import {combineReducers} from "@reduxjs/toolkit";
import vibeReducer from '../slices/vibeSelectSlice';

const rootReducer = combineReducers({
    vibe: vibeReducer,
});

export default rootReducer;
