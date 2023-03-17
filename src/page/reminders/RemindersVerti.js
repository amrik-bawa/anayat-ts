import { Col, Row } from 'react-bootstrap';
import RemindersMini from './reminders/RemindersMini';
import RemindersListVerti from './reminders/RemindersListVerti';

const RemindersVerti=()=>{
    return <Col lg="6" style={{background:'red'}}>
        <div className="h-100">
                        <Row>
                            <Col lg="12">
                                <RemindersMini/>
                            </Col>
                            </Row>
                    </div>
        </Col>
}
export default RemindersVerti;