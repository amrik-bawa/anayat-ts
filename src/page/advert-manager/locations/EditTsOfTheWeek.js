import axios from "axios"
import { useState } from "react"

const EditTsOfTheWeek=({dafault_spaces,advert_price})=> {

console.log('dafault_spaces',dafault_spaces)
        const [postData,setPostData]=useState({
            advert_spaces:dafault_spaces,
            advert_price:advert_price,
        })




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

    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
  }

  const onChangeHandler = (event) => {
    setPostData({...postData, [event.name]: event.value})
  }

  return (
    <div>
      <form action="" id="login" method="post" onSubmit={handleSubmit}>
        <h1>Edit TS of the week</h1>
        <p className="item">
          <label for="email"> Advert Spaces </label>
          <input
            type="text"
            value={postData.advert_spaces}
            name="advert_spaces"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <label for="password"> Advert Price </label>
          <input
          value={postData.advert_price}
            type="text"
            name="advert_price"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <label for="password"> Checkout text </label>
          <textarea
            type="text"
            name="checkout_text"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <label for="password"> Ads Page Text </label>
          <textarea
            type="text"
            name="ads_page_text"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <label for="password">Desktop Placeholder </label>
          <input
            type="file"
            name="desktop_placeholder"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <label for="password">Mobile Placeholder </label>
          <input
            type="file"
            name="mobile_placeholder"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  )
}

export default EditTsOfTheWeek;