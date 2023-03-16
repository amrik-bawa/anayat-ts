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


export const doLogout = (payload) => async (dispatch) => {

  return await dispatch(logoutSuccess())

  
};


const initialState = {
    loginData: [],
    token:localStorage.getItem('token'),
    loadingStatus:true
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.success = true;
      state.loginData = action.payload;
      state.token=state.loginData.token;
      localStorage.setItem('token', state.loginData.token);
  },
  loginError: (state, action) => {
      state.loginData = action.payload;
      state.loadingStatus = false;
  },
  logoutSuccess: (state, action) => {
    localStorage.removeItem('token');
    console.log('logging out')
    state.success = true;
    state.loginData = null;
    state.token=null;
    
},
logoutError: (state, action) => {
    state.loginData = action.payload;
    state.loadingStatus = false;
},
    setloadingStatus: (state, action) => {
        state.loadingStatus = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginSuccess,loginError,setloadingStatus,logoutSuccess,logoutError } = loginSlice.actions

export default loginSlice.reducer