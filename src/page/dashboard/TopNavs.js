import { Col } from 'react-bootstrap';
import GreenArrow from "../../assets/images/up-greenArrow.svg";
import Chart from "../../assets/images/chart.svg";


const TopNavs=()=>{
    return(
        <Col lg="6">
        <div className="bg-white p-2 border-lightgray">
            <div className="d-md-flex justify-content-between mb-3">
                <div>
                    <h6 className="mb-0">
                        Sessions
                    </h6>
                </div>
                <div>
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0001 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99998C10.8334 9.53974 10.4603 9.16665 10.0001 9.16665C9.53984 9.16665 9.16675 9.53974 9.16675 9.99998C9.16675 10.4602 9.53984 10.8333 10.0001 10.8333Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.0001 4.99998C10.4603 4.99998 10.8334 4.62688 10.8334 4.16665C10.8334 3.70641 10.4603 3.33331 10.0001 3.33331C9.53984 3.33331 9.16675 3.70641 9.16675 4.16665C9.16675 4.62688 9.53984 4.99998 10.0001 4.99998Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.0001 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.3731 10.4603 15 10.0001 15C9.53984 15 9.16675 15.3731 9.16675 15.8333C9.16675 16.2935 9.53984 16.6666 10.0001 16.6666Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="d-md-flex justify-content-between">
                <div>
                    <h3 className="fs-4">2,420</h3>
                    <div className="d-flex align-items-center">
                        <span>
                            <img src={GreenArrow} />
                        </span>
                        <span className="fs-14 text-success mb-0 ps-1">40%</span>
                        <h6 className="fs-14 text-gray mb-0 ps-2">vs last month</h6>
                    </div>
                </div>
                <div>
                    <img src={Chart} />
                </div>

            </div>
        </div>
    </Col>
    )
}

export default TopNavs;