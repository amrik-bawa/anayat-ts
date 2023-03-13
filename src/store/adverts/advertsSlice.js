import { createSlice } from '@reduxjs/toolkit'
import advertService from '../../services/adverts';
export const getLiveAdvertsList = (urlParams) => async (dispatch) => {
	dispatch(setloadingStatus(true));
	return advertService
		.getLiveList(urlParams)
		.then( (res) => {
            dispatch(liveAdvertsListSuccess(res?.data));
            return dispatch(setloadingStatus(false));
			
		})
		.catch((error) => {
            console.log(error.message)
			dispatch(setloadingStatus(false));
			return dispatch(liveAdvertsListError(error.message));
		});
};


export const getAdvertsLocations = (urlParams) => async (dispatch) => {
	dispatch(setloadingStatus(true));
	return advertService
		.getLocations(urlParams)
		.then( (res) => {
            dispatch(locationsListSuccess(res?.data));
            return dispatch(setloadingStatus(false));
			
		})
		.catch((error) => {
            console.log(error.message)
			dispatch(setloadingStatus(false));
			return dispatch(locationsListError(error.message));
		});
};



const initialState = {
    liveAdvertsList: [],
    advertsLocationsList: [],
    loadingStatus:true
}

export const advertSlice = createSlice({
  name: 'advert',
  initialState,
  reducers: {
    liveAdvertsListSuccess: (state, action) => {
        state.success = true;
        state.liveAdvertsList = action.payload;
    },
    liveAdvertsListError: (state, action) => {
        state.liveAdvertsList = null;
        state.loadingStatus = false;
    },
    locationsListSuccess: (state, action) => {
        state.success = true;
        state.advertsLocationsList = action.payload;
    },
    locationsListError: (state, action) => {
        state.advertsLocationsList = null;
        state.loadingStatus = false;
    },
    setloadingStatus: (state, action) => {
        state.loadingStatus = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    liveAdvertsListSuccess,
    liveAdvertsListError,
    locationsListError,
    locationsListSuccess,
    setloadingStatus } = advertSlice.actions

export default advertSlice.reducer