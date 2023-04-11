import { createSlice } from '@reduxjs/toolkit'
import usersService from '../../../services/user-manager/users';
export const getUserDetails = (urlParams) => async (dispatch) => {
	dispatch(setUserDetailsProcessing(true));
	return usersService
		.getDetails(urlParams)
		.then( (res) => {
            dispatch(userDetailsSuccess(res?.data));
            return dispatch(setUserDetailsProcessing(false));
			
		})
		.catch((error) => {
            console.log(error.message)
			dispatch(setUserDetailsProcessing(false));
			return dispatch(userDetailsError(error.message));
		});
};


export const updateUserDetails = (payload) => async (dispatch) => {
	// dispatch(setUserDetailsProcessing(true));
    console.log('payload on slice',payload)
	return usersService
		.updateDetails(payload)
		.then( (res) => {
            console.log('on submit res',res)
            // dispatch(userDetailsSuccess(res?.data));
            // return dispatch(setUserDetailsProcessing(false));
			
		})
		.catch((error) => {
            console.log('on submit error',error)
            // console.log(error.message)
			// dispatch(setUserDetailsProcessing(false));
			// return dispatch(userDetailsError(error.message));
		});
};



const initialState = {
    userDetails: [],
    userDetailsProcessing:true,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userDetailsSuccess: (state, action) => {
        state.success = true;
        state.userDetailsProcessing=false;
        state.userDetails = action.payload;
    },
    userDetailsError: (state, action) => {
        state.success = true;
        state.userDetailsProcessing=false;
        state.userDetails = action.payload;
    },
    setUserDetailsProcessing: (state, action) => {
        state.success = true;
        state.userDetailsProcessing=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { userDetailsSuccess,userDetailsError,setUserDetailsProcessing } = usersSlice.actions

export default usersSlice.reducer