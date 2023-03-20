import { Col, Row } from 'react-bootstrap';
import RemindersMini from '../reminders/RemindersMini';
import VerticalDots3 from "../../assets/images/vertical3Dots.svg";
import Cross from "../../assets/images/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { getRemindersList } from "../../store/reminders/remindersSlice";
import { useEffect } from "react";
import { DiscProgress, NoRecordsFound } from "../common/ResponseDisplay";

import { NavLink } from "react-router-dom";
import ReminderCard from './ReminderCard';
const RemindersWidget = () => {

    
    const { remindersData, remindersProcessing } = useSelector((state) => state.reminders)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRemindersList())
    }, [])


    return <div className="h-100">
        <Row>
            <Col lg="12">
                <RemindersMini />
            </Col>
            {(remindersProcessing) ? <Col lg="12"><DiscProgress height='200px' /></Col> : ''}
            {!remindersProcessing && remindersData && remindersData.slice(0, 2).map((item) => {
                return (
                    <Col lg="12" className="border-lightgray mt-3" style={{borderRadius:'8px',padding:'5px'}}>
                        <ReminderCard item={item} />
                    </Col>


                )
            })}

{
    (!remindersProcessing && remindersData && remindersData.length > 2) ?
    <Col lg="12" className="mt-3">
        <NavLink to="/reminders" className=" btn gray-btn fw-bold fs-16 text-dark text-decoration-none w-100">View All</NavLink>
    </Col> :
    ''
}


        </Row>
    </div>
}
export default RemindersWidget;