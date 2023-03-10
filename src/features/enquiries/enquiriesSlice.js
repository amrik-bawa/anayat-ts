import { createSlice } from "@reduxjs/toolkit";
import homeService from "../../services/home";
import { loadingStatus } from "../global/globalSlice";

export const getUserList = () => async (dispatch) => {
	dispatch(loadingStatus(true));
	return homeService
		.getList()
		// .then(async (res) => {
		// 	dispatch(userListSuccess(res?.data));
		// 	return dispatch(loadingStatus(false));
		// })
		// .catch((error) => {
		// 	dispatch(loadingStatus(false));
		// 	return dispatch(userListError(error));
		// });
};

const initialState = {
	success: false,
	userList: null,
};

const homeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {
		userListSuccess: (state, action) => {
			state.success = true;
			state.userList = action.payload;
		},
		userListError: (state, action) => {
			state.success = false;
			state.userList = null;
		},
	},
	extraReducers: {},
});

export const {
	userListSuccess,
	userListError,
} = homeSlice.actions;

export default homeSlice.reducer;
