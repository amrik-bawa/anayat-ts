import { createSlice } from '@reduxjs/toolkit'
import signUpsService from '../../services/signUps';
import { loadingStatus } from "../global/globalSlice";
export const getSignUpsList = (urlParams) => async (dispatch) => {
	dispatch(setloadingStatus(true));
	return signUpsService
		.getList(urlParams)
		.then( (res) => {
            dispatch(setloadingStatus(false));
			return dispatch(signUpsListSuccess(res?.data));
		})
		.catch((error) => {
            console.log(error.message)
			dispatch(setloadingStatus(false));
			return dispatch(signUpsListError(error.message));
		});
};



const initialState = {
    signUpsList: [],
    loadingStatus:true
}

export const signUpsSlice = createSlice({
  name: 'signUps',
  initialState,
  reducers: {
    signUpsListSuccess: (state, action) => {
        state.success = true;
        state.signUpsList = action.payload;
    },
    signUpsListError: (state, action) => {
        state.signUpsList = null;
        state.loadingStatus = false;
    },
    setloadingStatus: (state, action) => {
        state.loadingStatus = action.payload;
    },

  },
})

// Action creators are generated for each case reducer function
export const { signUpsListSuccess,signUpsListError,setloadingStatus } = signUpsSlice.actions

export default signUpsSlice.reducer