import Admin from "../../assets/images/admin.png";
import RoundTick from "../../assets/images/round-tick.svg";
import Msg from "../../assets/images/msg.svg";
const ReminderCard=({item})=>{
    return <>
    <div className="d-flex justify-content-between align-items-center border-lightgray ">
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
    </>
}
export default ReminderCard;