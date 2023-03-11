import { createSlice } from '@reduxjs/toolkit'
import administratorsService from '../../../services/user-manager/administrators';
export const getAdministratorsList = (urlParams) => async (dispatch) => {
	dispatch(setloadingStatus(true));
	return administratorsService
		.getList(urlParams)
		.then( (res) => {
            dispatch(administratorsListSuccess(res?.data));
            return dispatch(setloadingStatus(false));
			
		})
		.catch((error) => {
            console.log(error.message)
			dispatch(setloadingStatus(false));
			return dispatch(administratorsError(error.message));
		});
};



const initialState = {
    administratorsList: [],
    loadingStatus:true
}

export const administratorsSlice = createSlice({
  name: 'administrators',
  initialState,
  reducers: {
    administratorsListSuccess: (state, action) => {
        state.success = true;
        state.administratorsList = action.payload;
    },
    administratorsListError: (state, action) => {
        state.administratorsList = null;
        state.loadingStatus = false;
    },
    setloadingStatus: (state, action) => {
        state.loadingStatus = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { administratorsListSuccess,administratorsError,setloadingStatus } = administratorsSlice.actions

export default administratorsSlice.reducer