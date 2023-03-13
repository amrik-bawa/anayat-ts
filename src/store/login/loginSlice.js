import { createSlice } from '@reduxjs/toolkit'
import loginService from '../../services/login';
export const doLogin = (payload) => async (dispatch) => {
	dispatch(setloadingStatus(true));
	return loginService
		.login(payload)
		.then( (res) => {
            dispatch(loginSuccess(res?.data));
            return dispatch(setloadingStatus(false));
			
		})
		.catch((error) => {
			dispatch(setloadingStatus(false));
			return dispatch(loginError(error.response));
		});
};



const initialState = {
    loginData: [],
    token:null,
    loadingStatus:true
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
        state.success = true;
        state.loginData = action.payload;
        localStorage.setItem('token', state.loginData.token);
    },
    loginError: (state, action) => {
        state.loginData = action.payload;
        state.loadingStatus = false;
        console.log(state.loginData)
    },
    setloadingStatus: (state, action) => {
        state.loadingStatus = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginSuccess,loginError,setloadingStatus } = loginSlice.actions

export default loginSlice.reducer