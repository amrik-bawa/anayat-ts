import Add from "../../assets/images/add.svg";
import { useState } from "react";
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";

import RemindersAddNew from "./RemindersAddNew";
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
  const dispatch =useDispatch();
  const { remindersData, remindersProcessing } = useSelector((state) => state.reminders)
  const {loginData,loadingStatus,token}=useSelector((state)=>state.login)
  

    const openAddNew=()=>{
        handleOpen();
    }

    


    return <>
    <Modal open={open}    onClose={handleClose}     aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <RemindersAddNew/>
        </Box>

      </Modal>

        <div className="p-2 bg-dark rounded-2 mt-3 mt-lg-0">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <div className="bg-white rounded-2 p-2">
                                                <h6 className="fs-12 fw-bold text-gray mb-0">{remindersData?.length}</h6>
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