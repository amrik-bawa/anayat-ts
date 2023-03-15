import axios from "axios"
import { useState } from "react"

const Test3=()=> {


        const [postData,setPostData]=useState("")


  const handleSubmit = e => {
    // Prevent the default submit and page reload
    e.preventDefault()
    console.log('posting data',postData)
    // Handle validations
    // axios
    //   .post("https://example.con/login", postData)
    //   .then(response => {
    //     console.log(response)
    //     // Handle response
    //   })
  }

  const onChangeHandler = (event) => {
    setPostData({...postData, [event.name]: event.value})
  }

  return (
    <div>
      <form action="" id="login" method="post" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p className="item">
          <label for="email"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <label for="password"> Password </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>
        <p className="item">
          <input type="submit" value="Login" />
        </p>
      </form>
    </div>
  )
}

export default Test3