import HeadingA from "../../common/HeadingA";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesList, addNew, getRemindersList } from "../../../store/reminders/remindersSlice";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import './LiveAdvertsAddNew.css'
import ImageCropper from '../../components/imageCropper'
const LiveAdvertsAddNew = () => {
    const [postData, setPostData] = useState({})
    const { remindersCategoriesList, categoriesProcessing } = useSelector((state) => state.reminders);
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)
    const [imageA,setImageA]=useState('A');
    const [imageB,setImageB]=useState('B');
    const [imageC,setImageC]=useState('C');
    const [imageD,setImageD]=useState('D');
    //---fetch categories
    useEffect(() => {
        dispatch(getCategoriesList()).then(() => {
        })
    }, [])

    //---handle all input changes
    const onChangeHandler = (event) => {
        setPostData({ ...postData, [event.name]: event.value })
    }

    //---handle form submission  
    const handleSubmit = event => {
        event.preventDefault();
        const myFormData = new FormData(event.target);
        const formDataObj = {};
        myFormData.forEach((value, key) => (formDataObj[key] = value));
        console.log('payload data', formDataObj)
        dispatch(addNew(formDataObj)).then(() => {
            dispatch(getRemindersList())
        })
    }
console.log(
    'imageA',imageA,
    'imageB',imageB,
    'imageC',imageC,
    'imageD',imageD,
)
    return <>
        <div className="live-adv-add-new" style={{ width: '80%', maxWidth: '800px',margin:'auto' }}>
            <HeadingA name='Add New Live Advert' />
            
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select User</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select User"
                        name="priority"
                    >
                        <MenuItem value='high'>High</MenuItem>
                        <MenuItem value='medium'>Medium</MenuItem>
                        <MenuItem value='low'>Low</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Advert</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select Advert"
                        name="category"

                    >
                        {remindersCategoriesList.map((item) => {
                            return <MenuItem key={item.term_id} value={item.term_id}>{item.name}</MenuItem>

                        })}

                    </Select>
                    <br />
                </FormControl>

                <div className="img-contaner">
                    <ImageSelector setImage={setImageA} />
                    <ImageSelector setImage={setImageB}/>
                    <ImageSelector setImage={setImageC}/>
                    <ImageSelector setImage={setImageD}/>
                </div>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"

                >
                    Save
                </Button>

            </form>
        </div>
    </>
}
const ImageSelector=({setImage})=>{


    const [blob, setBlob] = useState(null)
    const [inputImg, setInputImg] = useState('')
    const [preview,setPreview]=useState('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
    const getBlob = (blob) => {
        // pass blob up from the ImageCropper component
        setBlob(blob)
    }

    const onInputChange = (e) => {
        // convert image file to base64 string
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.addEventListener('load', () => {
            setInputImg(reader.result)
        }, false)

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    const handleCropImage = (e) => {
        // setImage('amrik')
    // upload blob to firebase 'images' folder with filename 'image'
        e.preventDefault()
        // console.log('my blob',blob)
        setPreview(URL.createObjectURL(blob))
        setImage(blob)
        setInputImg('')
        // firebase
        //     .storage()
        //     .ref('images')
        //     .child('image')
        //     .put(blob, { contentType: blob.type })
        //     .then(() => {
        //         // redirect user 
        //     })
    }

    return <div className="img-selector">
        <div className="img-preview">
        <img src={preview}/>
        </div>
        <input
                type='file'
                accept='image/*'
                onChange={onInputChange}
            />
            {
                inputImg && (
                    <><div style={{width:'500px',height:'500px',position:'relative'}}>
                        <ImageCropper
                        getBlob={getBlob}
                        inputImg={inputImg}
                    />
                    
                    </div>
                    <button onClick={handleCropImage}>Crop</button>
                    </>
                )
            }
    </div>
}
export default LiveAdvertsAddNew