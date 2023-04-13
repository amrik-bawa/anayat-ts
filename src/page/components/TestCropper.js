import React, { useState } from 'react'
// import * as firebase from 'firebase/app'
// import ImageCropper from './ImageCropper'
import ImageCropper from './imageCropper'

const TestCropper = () => {
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

    const handleSubmitImage = (e) => {
    // upload blob to firebase 'images' folder with filename 'image'
        e.preventDefault()
        console.log('my blob',blob)
        setPreview(URL.createObjectURL(blob))
        // firebase
        //     .storage()
        //     .ref('images')
        //     .child('image')
        //     .put(blob, { contentType: blob.type })
        //     .then(() => {
        //         // redirect user 
        //     })
    }


    return (
        <form onSubmit={handleSubmitImage}>
            
            <input
                type='file'
                accept='image/*'
                onChange={onInputChange}
            />
            {
                inputImg && (
                    <div style={{width:'500px',height:'500px',position:'relative'}}><ImageCropper
                        getBlob={getBlob}
                        inputImg={inputImg}
                    /></div>
                )
            }
            <button type='submit'>Submit</button>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <img src={preview}/>
        </form>
    )
}

export default TestCropper