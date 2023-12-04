import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const vibeSelectVibeSlice = createSlice({
    name: 'vibeSelect',
    initialState,
    reducers: {
        setVibe : (state, action) => {
            state.vibe = action.payload;
        }
    }
});

export const { setVibe } = vibeSelectVibeSlice.actions;

export const selectChosenVibe = (state) => state.vibe.vibe;
export default vibeSelectVibeSlice.reducer;
