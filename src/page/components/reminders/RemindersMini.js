import Add from "../../../assets/images/add.svg";
import { useEffect, useState } from "react";
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import HeadingA from "../../common/HeadingA";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	bgcolor: 'background.paper',
	border: '1px solid pink',
	borderRadius:'15px',
	boxShadow: 24,
	p: 4,
  };

 const  RemindersMini=()=>{
  
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const [postData,setPostData]=useState({})

    const openAddNew=()=>{
        handleOpen();
    }

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


    return <>
    <Modal open={open}    onClose={handleClose}     aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
            <>
			
            <HeadingA name='Add New Reminder'/>
            <form action="" id="login" method="post" onSubmit={handleSubmit}>
        <p className="item">
          <label for="name"> Name </label>
          <input
            type="text"
            value={postData.advert_spaces}
            name="name"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>

        <p className="item">
          <label for="password"> Text </label>
          <textarea
            type="text"
            name="text"
            onChange={(e) => onChangeHandler(e.target)}
            required
          />
        </p>



        <p className="item">
          <input type="submit" value="Submit" />
        </p>
      </form>
      </>
		</Box>

      </Modal>

        <div className="p-2 bg-dark rounded-2 mt-3 mt-lg-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <div className="bg-white rounded-2 p-2">
                                                <h6 className="fs-12 fw-bold text-gray mb-0">12</h6>
                                            </div>
                                            <h4 className="text-white fs-5 fw-semibold ps-2 mb-0"> Reminders</h4>
                                        </div>
                                        <div>
                                            
                                            
                                            <img onClick={openAddNew} src={Add} alt="" />
                                        </div>
                                    </div>
                                </div>
    </>
}

export default RemindersMini