import { createSlice } from '@reduxjs/toolkit'
import customersService from '../../../services/user-manager/customers';
export const getCustomersList = (urlParams) => async (dispatch) => {
	dispatch(setloadingStatus(true));
	return customersService
		.getList(urlParams)
		.then( (res) => {
            dispatch(customersListSuccess(res?.data));
            return dispatch(setloadingStatus(false));
			
		})
		.catch((error) => {
            console.log(error.message)
			dispatch(setloadingStatus(false));
			return dispatch(customersError(error.message));
		});
};



const initialState = {
    customersList: [],
    loadingStatus:true
}

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    customersListSuccess: (state, action) => {
        state.success = true;
        state.customersList = action.payload;
    },
    customersListError: (state, action) => {
        state.customersList = null;
        state.loadingStatus = false;
    },
    setloadingStatus: (state, action) => {
        state.loadingStatus = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { customersListSuccess,customersError,setloadingStatus } = customersSlice.actions

export default customersSlice.reducer