import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value : {
        token : null,
        userDetails: null
    }
}

const authSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {
        storeToken(state, action){
            state.value.token = action.payload;
        },
        storeUsrData(state, action){
            state.value.userDetails = action.payload;
        }
    }
})


export const {storeToken, storeUsrData} = authSlice.actions;
export default authSlice.reducer;