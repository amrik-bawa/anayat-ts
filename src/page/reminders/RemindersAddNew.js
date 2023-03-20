import HeadingA from "../common/HeadingA";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCategoriesList,addNew,getRemindersList } from "../../store/reminders/remindersSlice";
import TextField  from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const RemindersAddNew=()=>{
    const [postData,setPostData]=useState({})
    const { remindersCategoriesList,categoriesProcessing } = useSelector((state) => state.reminders);
    const dispatch=useDispatch();
    const [categories,setCategories]=useState([])
    const [isDisabled,setIsDisabled]=useState(true)
      
    //---fetch categories
    useEffect(() => {
        dispatch(getCategoriesList()).then(()=>{
        })
    }, [])
    
    //---handle all input changes
    const onChangeHandler = (event) => {
        setPostData({...postData, [event.name]: event.value})
      }

    //---handle form submission  
      const handleSubmit = event => {
        event.preventDefault();
        const myFormData = new FormData(event.target);
        const formDataObj = {};
        myFormData.forEach((value, key) => (formDataObj[key] = value));
        console.log('payload data', formDataObj)
        dispatch(addNew(formDataObj)).then(()=>{
          dispatch(getRemindersList())
        })
      }
      
    return <>
    <HeadingA name='Add New Reminder'/>
    <form   onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="email"
            autoFocus
            
          />
<br/>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="content"
            label="Content"
            type="text"
            id="content"
            multiline
            rows={4}
            autoComplete="content"
          />
<br/>

          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Priorityss"
          name="priority"
        >
          <MenuItem value='high'>High</MenuItem>
          <MenuItem value='medium'>Medium</MenuItem>
          <MenuItem value='low'>Low</MenuItem>
        </Select>
      </FormControl>
<br/>
<br/>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          name="category"

        >
            {remindersCategoriesList.map((item)=>{
                return <MenuItem key={item.term_id} value={item.term_id}>{item.name}</MenuItem>

    })}

        </Select>
        <br/>
      </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Save
          </Button>

        </form>
    </>
}
export default RemindersAddNew;