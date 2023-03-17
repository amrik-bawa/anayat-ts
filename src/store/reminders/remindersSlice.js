import { createSlice } from '@reduxjs/toolkit'
import remindersService from '../../services/reminders';

export const addNew = (payload) => async (dispatch) => {
	dispatch(addNewProcessing(true));
	return remindersService
		.addNew(payload)
		.then( (res) => {
            dispatch(addNewSuccess(res?.data));
            return dispatch(addNewProcessing(false));
			
		})
		.catch((error) => {
			dispatch(addNewProcessing(false));
      console.log(error)
			return dispatch(addNewError(error.response));
		});
};


export const getCategoriesList = (urlParams) => async (dispatch) => {
	dispatch(setCategoriesProcessing(true));
	return remindersService
		.get_categories_list(urlParams)
		.then( (res) => {
            dispatch(categoriesSuccess(res?.data));
            return dispatch(setloadingStatus(false));
			
		})
		.catch((error) => {
            console.log(error.message)
			dispatch(setloadingStatus(false));
			return dispatch(categoriesError(error.message));
		});
};


export const getRemindersList = (urlParams) => async (dispatch) => {
	dispatch(setRemindersProcessing(true));
	return remindersService
		.get_list(urlParams)
		.then( (res) => {
            dispatch(remindersSuccess(res?.data));
            return dispatch(setRemindersProcessing(false));
			
		})
		.catch((error) => {
            console.log(error.message)
			dispatch(setRemindersProcessing(false));
			return dispatch(remindersError(error.message));
		});
};


const initialState = {
    remindersData: [],
    remindersProcessing:true,
    remindersCategoriesList: [],
    loadingStatus:true,
    addNewResponse:null,
    addNewProcessing:false,
    categoriesProcessing:true,
}

export const remindersSlice = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    addNewSuccess: (state, action) => {
      state.success = true;
      state.addNewResponse=action.payload
  },
  addNewError: (state, action) => {
      state.loadingStatus = false;
  },
  
    remindersSuccess: (state, action) => {
      state.success = true;
      state.remindersData=action.payload
  },
  remindersError: (state, action) => {
      state.loadingStatus = false;
      state.remindersData=null;
      state.remindersProcessing=false;
  },
  addNewProcessing: (state, action) => {
    state.loadingStatus = action.payload;
},
categoriesSuccess: (state, action) => {
  state.loadingStatus = action.payload;
  state.categoriesProcessing=false;
  state.remindersCategoriesList=action.payload
},
categoriesError: (state, action) => {
  state.loadingStatus = action.payload;
  state.categoriesProcessing=false;
  state.remindersCategoriesList=null
},
    setloadingStatus: (state, action) => {
        state.loadingStatus = action.payload;
    },
    setRemindersProcessing: (state, action) => {
      state.remindersProcessing = action.payload;
  },
  setCategoriesProcessing: (state, action) => {
    state.categoriesProcessing = action.payload;
}
  },
})

// Action creators are generated for each case reducer function
export const { addNewSuccess,addNewError,setloadingStatus,addNewProcessing,categoriesSuccess,categoriesError, remindersSuccess, remindersError,loadingStatus,setRemindersProcessing,setCategoriesProcessing } = remindersSlice.actions

export default remindersSlice.reducer