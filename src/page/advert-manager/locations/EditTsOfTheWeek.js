import axios from "axios"
import { useState } from "react"
import HeadingA from "../../common/HeadingA"
import { useDispatch } from "react-redux"
import { getAdvertsLocations, updateAdvertsLocations } from "../../../store/adverts/advertsSlice"

const EditTsOfTheWeek=({details})=> {
 const dispatch= useDispatch();
console.log('details',details)
        const [postData,setPostData]=useState(details)
        const [selectedFileD,setSelectedFileD]=useState(null)
        const [selectedFileM,setSelectedFileM]=useState(null)



        //-----------WITHOUT FILE DATA
        // const handleSubmit = e => {
        //     // Prevent the default submit and page reload
        //     e.preventDefault()
        //     console.log('posting data',postData)
        //     // Handle validations
        //     axios
        //       .post("http://localhost/test-apis/index.php", postData)
        //       .then(response => {
        //         console.log(response)
        //         // Handle response
        //       }).catch((error)=>{
        //         console.log(error)
        
        //       })
        //   }








  const handleSubmit = event => {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    myFormData.append('product_id',details?.product_id)
    //--attach files
    if(selectedFileD){
      myFormData.append('placeholder_desktop',selectedFileD)
    }
    if(selectedFileM){
      myFormData.append('placeholder_mobile',selectedFileM)
    }


    dispatch(updateAdvertsLocations(myFormData,{
      headers: {
        'content-type': 'multipart/form-data'
        }})).then((res)=>{
          if(res?.status==200){
            dispatch(getAdvertsLocations())
          }
      console.log('aaaaaaa', res)
    }).catch((error)=>{
      console.log('submit error',error)
    })
  }

  const onChangeHandler = (event) => {
    setPostData({...postData, [event.name]: event.value})
  }
  const handleFileChangeD=(e)=>{
    setSelectedFileD(e.target.files[0])
  }
  const handleFileChangeM=(e)=>{
    setSelectedFileM(e.target.files[0])
  }
  return (
    <div>
      <form action="" id="login" method="post" onSubmit={handleSubmit}>
        <HeadingA name='Edit TS of the week'/>
        <p className="item">
          <label for="advert_spaces"> Default Spaces </label>
          <input
            type="text"
            value={postData?.default_spaces}
            name="default_spaces"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <label for="advert_price"> Advert Price </label>
          <input
          value={postData?.price}
            type="text"
            name="price"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <label for="title"> Checkout text </label>
          <textarea
          value={postData?.title}
            type="text"
            name="title"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <label for="package_desc"> Ads Page Text </label>
          <textarea
          value={postData?.package_desc}
            type="text"
            name="package_desc"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <label for="desktop_placeholder">Desktop Placeholder </label>
          {(()=>{
            console.log('url is ',postData?.placeholders?.desktop?.url)
            if(postData?.placeholders?.desktop?.url){
              return <img style={{width:'150px',height:'auto',maxHeight:'150px'}} src={postData?.placeholders?.desktop?.url}/>
            }else{
             return <img style={{width:'150px',height:'auto',maxHeight:'150px'}} src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'/>
            }
          })()}
          <input type='file' onChange={handleFileChangeD} />
        </p>
        <p className="item">
          <label for="mobile_placeholder">Mobile Placeholder </label>
          <div>{(()=>{
            console.log('url is ',postData?.placeholders?.mobile?.url)
            if(postData?.placeholders?.mobile?.url){
              return <img style={{width:'150px',height:'auto',maxHeight:'150px'}} src={postData?.placeholders?.mobile?.url}/>
            }else{
             return <img style={{width:'150px',height:'auto',maxHeight:'150px'}} src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'/>
            }
          })()}</div>
          <input type='file' onChange={handleFileChangeM} />
        </p>
        <p className="item">
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  )
}

export default EditTsOfTheWeek;