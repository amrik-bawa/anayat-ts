import { createSlice } from '@reduxjs/toolkit'
import enquiriesService from '../../services/enquiries';
import { loadingStatus } from "../global/globalSlice";
export const getEnquiriesList = () => async (dispatch) => {
	// dispatch(loadingStatus(true));
    // console.log(enquiriesService.getList())
	return enquiriesService
		.getList()
		.then( (res) => {
			dispatch(enquiriesListSuccess(res?.data));
			return dispatch(loadingStatus(false));
		})
		.catch((error) => {
            console.log(error.message)
			dispatch(loadingStatus(false));
			return dispatch(enquiriesListError(error.message));
		});
};



const initialState = {
    enquiriesList: [],
}

export const enquiriesSlice = createSlice({
  name: 'enquiries',
  initialState,
  reducers: {
    enquiriesListSuccess: (state, action) => {
        state.success = true;
        state.enquiriesList = action.payload;
    },
    enquiriesListError: (state, action) => {
        state.success = false;
        state.enquiriesList = null;
    },
    changeName: (state, action) => {
        state.success = true;
        state.enquiriesList = action.payload;
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { enquiriesListSuccess,enquiriesListError,changeName } = enquiriesSlice.actions

export default enquiriesSlice.reducer