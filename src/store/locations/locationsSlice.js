import { createSlice } from '@reduxjs/toolkit'
import locationsService from '../../services/locations';
export const getLocationsList = (urlParams) => async (dispatch) => {
	dispatch(setLocationsLoading(true));
	return locationsService
		.getList(urlParams)
		.then( (res) => {
            dispatch(locationsListSuccess(res?.data));
            return dispatch(setLocationsLoading(false));
			
		})
		.catch((error) => {
            console.log(error.message)
			dispatch(setLocationsLoading(false));
			return dispatch(locationsListError(error.message));
		});
};



const initialState = {
    locationsList: [],
    locationsLoading:true,
    locationsRegions:[]
}

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    locationsListSuccess: (state, action) => {
        state.success = true;
        state.locationsList = action.payload;
        state.locationsRegions=state.locationsList.filter(item=>item.parent==0)
    },
    locationsListError: (state, action) => {
        state.locationsList = null;
        state.locationsLoading = false;
    },
    setLocationsLoading: (state, action) => {
        state.locationsLoading = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { locationsListSuccess,locationsListError,setLocationsLoading } = locationsSlice.actions

export default locationsSlice.reducer