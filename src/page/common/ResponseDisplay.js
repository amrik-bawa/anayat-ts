import { CircularProgress } from '@mui/material';
import './ResponseDisplay.css'

export const DiscProgress =(props)=>{
    return <div style={{height:props.height}} className="res-disp-box"><CircularProgress/></div>
}

export const NoRecordsFound =(props)=>{
    return <div className="res-disp-box" style={{color:'grey',fontWeight:'bolder',height:props.height}}>No Records Found</div>
}
