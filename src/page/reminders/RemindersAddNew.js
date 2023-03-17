import HeadingA from "../common/HeadingA";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCategoriesList,addNew,getRemindersList } from "../../store/reminders/remindersSlice";
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
        dispatch(addNew(formDataObj)).then(()=>{
          dispatch(getRemindersList())
        })
      }
      
    return <>
    <HeadingA name='Add New Reminder'/>
    <form action="" id="login" method="post" onSubmit={handleSubmit}>
<p className="item">
  <label> Title </label>
  <input
    type="text"
    value={postData.advert_spaces}
    name="title"
    onChange={(e) => onChangeHandler(e.target)}
    required
  />
</p>

<p>
  <label> Content </label>
  <textarea
    type="text"
    name="content"
    onChange={(e) => onChangeHandler(e.target)}
    required
  />
</p>
<p >
  <label for="priority">Priority </label>
  <select
    value={postData.priority}
    name="priority"
    onChange={(e) => onChangeHandler(e.target)}
    required
  >
    <option value='high'>High</option>
    <option value='medium'>Medium</option>
    <option value='low'>Low</option>
  </select>
</p>
<p>
  <label for="email">Category </label>
  <select
    value={postData.category}
    name="category"
    onChange={(e) => onChangeHandler(e.target)}
    required
  >
    {remindersCategoriesList.map((item)=>{
       return <option value={item.term_id}>{item.name}</option>
    })}
  </select>
</p>

<p className="item">
  <input disabled={(categoriesProcessing)?'disabled':''} type="submit" value="Submit" />
</p>
</form>
    </>
}
export default RemindersAddNew;