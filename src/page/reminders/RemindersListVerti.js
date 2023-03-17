import Admin from "../../assets/images/admin.png";
import RoundTick from "../../assets/images/round-tick.svg";
import Msg from "../../assets/images/msg.svg";
import { useDispatch, useSelector } from "react-redux";
import { getRemindersList } from "../../store/reminders/remindersSlice";
import { useEffect } from "react";
import {DiscProgress,NoRecordsFound} from "../common/ResponseDisplay";
import { Col, Row } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
const RemindersListVerti=()=>{
    const {remindersData,remindersProcessing}=useSelector((state)=>state.reminders)
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getRemindersList())
    }, [])

    return <>
    {(()=>{
			if(remindersProcessing){
				return <DiscProgress height='400px'/>
			}else if(remindersData && remindersData.length==0){
                return <NoRecordsFound/>
            }else{

                return <>


                { remindersData &&  remindersData.slice(0,2).map((item) => { 
                    
					return (<>
                    <Col lg="12" style={{border:'1px solid grey',borderRadius:'5px'}}>
                    <div className="d-flex justify-content-between align-items-center">
                                        <h3 className="text-gray fs-6 fw-bold mb-0">{item.title}</h3>
                                        <div>
                                            <a href="#" className="lightred-btn fw-semibold px-3 py-1 rounded-pill fs-6 text-danger text-decoration-none">{item.priority}</a>
                                        </div>
                                    </div>
                                    <h3 className="fs-5 fw-bold mt-3">
                                    {item.content}
                                    </h3>
                                    <p className="text-gray fs-6 mb-2">Placeholder for card text.</p>
                                    <div className=" d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <div className="admin-img">
                                                <img src={Admin} alt="" className="img-fluid" />
                                            </div>
                                            <div className="admin-img-1">
                                                <img src={Admin} className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="d-flex">
                                                <span><img src={Msg} /></span>
                                                <h6 className="fw-bold fs-6 fw-bold mb-0 ps-1 text-gray">12</h6>
                                            </div>
                                            <div className="d-flex ps-2">
                                                <span>
                                                    <img src={RoundTick} alt="" />
                                                </span>
                                                <h6 className="fw-bold fs-6 fw-bold mb-0 ps-1 text-gray">1/3</h6>
                                            </div>

                                        </div>
                                    </div>
                                    </Col>
                                    
                                    
					</>)
					})}

                                {remindersData.length>2 ?
                                    <Col lg="12" className="mt-3">
                                        <NavLink to="/reminders" className=" btn gray-btn fw-bold fs-16 text-dark text-decoration-none w-100">View All</NavLink>
                                    </Col>  :
                                    ''
                                    }

                </>

            }
				
		})()}
                            
                                </>
}
export default RemindersListVerti;