import { Col, Row } from 'react-bootstrap';
import TopNavs from './TopNavs'
import RedArrow from "../../assets/images/down_redArrow.svg";
import RedChart from "../../assets/images/red-chart.svg";
import RecentSignUp from "./RecentSignUp";
import GreenArrow from "../../assets/images/up-greenArrow.svg";
import Chart from "../../assets/images/chart.svg";
import Graph from "../../assets/images/graph.png";
import TabAvtar from "../../assets/images/tab-avtar.png";
import DotsVertical from "../../assets/images/dots-vertical.svg";

import VerticalDots3 from "../../assets/images/vertical3Dots.svg";
import Cross from "../../assets/images/cross.svg";
import Admin from "../../assets/images/admin.png";
import RoundTick from "../../assets/images/round-tick.svg";
import Msg from "../../assets/images/msg.svg";
import RemindersMini from '../components/reminders/RemindersMini';
const Home=()=>{
    return <div className="px-1 py-2">
    <Row className="">
        <Col lg="6" >
            <Row>
                <TopNavs/>
                <Col lg="6">
                    <div className="bg-white p-2 border-lightgray mt-3 mt-lg-0">
                        <div className="d-md-flex justify-content-between mb-3">
                            <div>
                                <h6 className="mb-0">
                                    Page View
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
                                        <img src={RedArrow} />
                                    </span>
                                    <span className="fs-14 text-danger mb-0 ps-1">10%</span>
                                    <h6 className="fs-14 text-gray mb-0 ps-2">vs last month</h6>
                                </div>
                            </div>
                            <div>
                                <img src={RedChart} />
                            </div>

                        </div>
                    </div>
                </Col>
                <Col lg="12">
                    <div className="p-3 bg-white mt-3 border-lightgray">
                        <div className="d-lg-flex justify-content-between mb-3">
                            <h3 className="fs-4 fw-bold">Quick Analytics</h3>
                            <div className="d-lg-flex">
                                <button className="btn btn-outline-dark fs-14 py-1 px-3">
                                    Weekly
                                </button>
                                <button type="button" className="btn btn-light fs-14 py-1 px-2 mx-2">Monthly</button>
                                <button className="btn btn-dark fs-14 py-1 px-2">
                                    Full Analytics
                                </button>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="d-flex">
                                <div className="blue-div">
                                </div>
                                <h6 className="fs-14 text-gray ps-2">Running Week</h6>

                            </div>
                            <div className="d-flex ps-4">
                                <div className="lightblue-div">
                                </div>
                                <h6 className="fs-14 text-gray ps-2">Previous Week</h6>

                            </div>
                        </div>
                        <div>
                            <img src={Graph} className="img-fluid" />
                        </div>
                    </div>

                </Col>
                <Col lg="12">
                    <RecentSignUp/>
                </Col>
            </Row>
        </Col>
        <Col lg="6">
            <Row>
                <Col lg="6">
                    <div className="h-100">
                        <Row>
                            <Col lg="12">
                                <div className="bg-white p-2 border-lightgray mt-3 mt-lg-0">
                                    <div className="d-md-flex justify-content-between mb-3">
                                        <div>
                                            <h6 className="mb-0">
                                                Bounce Rate
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
                                            <h3 className="fs-4">54.01%</h3>
                                            <div className="d-flex align-items-center">
                                                <span>
                                                    <img src={GreenArrow} />
                                                </span>
                                                <span className="fs-14 text-success mb-0 ps-1">20%</span>
                                                <h6 className="fs-14 text-gray mb-0 ps-2">vs last month</h6>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={Chart} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="12">
                                <div className="mt-3">
                                    <div className="bg-white border-lightgray">
                                        <div>
                                            <div className="d-lg-flex justify-content-between py-2 px-2 border-b">
                                                <div className="d-flex align-items-center">
                                                    <h3 className="fw-bold fs-18 mb-0">Recent Purchases</h3>
                                                    <div className="ms-1">
                                                        <h6 className="text-danger fs-12 mb-0 ads-bg rounded-pill px-2 py-1">06 Ads</h6>
                                                    </div>
                                                </div>
                                                <div>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.0001 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99998C10.8334 9.53974 10.4603 9.16665 10.0001 9.16665C9.53984 9.16665 9.16675 9.53974 9.16675 9.99998C9.16675 10.4602 9.53984 10.8333 10.0001 10.8333Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.0001 4.99998C10.4603 4.99998 10.8334 4.62688 10.8334 4.16665C10.8334 3.70641 10.4603 3.33331 10.0001 3.33331C9.53984 3.33331 9.16675 3.70641 9.16675 4.16665C9.16675 4.62688 9.53984 4.99998 10.0001 4.99998Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.0001 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.3731 10.4603 15 10.0001 15C9.53984 15 9.16675 15.3731 9.16675 15.8333C9.16675 16.2935 9.53984 16.6666 10.0001 16.6666Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center p-2 border-b">
                                                <div>
                                                    <h4 className="fs-12 mb-0 text-gray fw-semibold">Name</h4>
                                                </div>
                                                <div>
                                                    <a href="#" className="fs-12 text-gray text-decoration-none fw-semibold">Action</a>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center p-2 border-b">
                                                <div>
                                                    <h4 className="fs-14 mb-0 fw-semibold">Summer Fun Sale</h4>
                                                    <h6 className="text-gray fs-12 mb-0">24 Feb 2023</h6>
                                                </div>
                                                <div>
                                                    <a href="#" className="fs-12 text-gray text-decoration-none fw-semibold">
                                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.920123 8.71318C0.783936 8.49754 0.715842 8.38972 0.677724 8.22342C0.649092 8.0985 0.649092 7.9015 0.677724 7.77658C0.715842 7.61028 0.783936 7.50246 0.920122 7.28682C2.04553 5.50484 5.3954 1 10.5004 1C15.6054 1 18.9553 5.50484 20.0807 7.28682C20.2169 7.50246 20.285 7.61028 20.3231 7.77658C20.3517 7.9015 20.3517 8.0985 20.3231 8.22342C20.285 8.38972 20.2169 8.49754 20.0807 8.71318C18.9553 10.4952 15.6054 15 10.5004 15C5.3954 15 2.04553 10.4952 0.920123 8.71318Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M10.5004 11C12.1573 11 13.5004 9.65685 13.5004 8C13.5004 6.34315 12.1573 5 10.5004 5C8.84355 5 7.5004 6.34315 7.5004 8C7.5004 9.65685 8.84355 11 10.5004 11Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center p-2 border-b">
                                                <div>
                                                    <h4 className="fs-14 mb-0 fw-semibold">Fall in Love with Our Products</h4>
                                                    <h6 className="text-gray fs-12 mb-0">23 Feb 2023</h6>
                                                </div>
                                                <div>
                                                    <a href="#" className="fs-12 text-gray text-decoration-none fw-semibold">
                                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.920123 8.71318C0.783936 8.49754 0.715842 8.38972 0.677724 8.22342C0.649092 8.0985 0.649092 7.9015 0.677724 7.77658C0.715842 7.61028 0.783936 7.50246 0.920122 7.28682C2.04553 5.50484 5.3954 1 10.5004 1C15.6054 1 18.9553 5.50484 20.0807 7.28682C20.2169 7.50246 20.285 7.61028 20.3231 7.77658C20.3517 7.9015 20.3517 8.0985 20.3231 8.22342C20.285 8.38972 20.2169 8.49754 20.0807 8.71318C18.9553 10.4952 15.6054 15 10.5004 15C5.3954 15 2.04553 10.4952 0.920123 8.71318Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M10.5004 11C12.1573 11 13.5004 9.65685 13.5004 8C13.5004 6.34315 12.1573 5 10.5004 5C8.84355 5 7.5004 6.34315 7.5004 8C7.5004 9.65685 8.84355 11 10.5004 11Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center p-2 border-b">
                                                <div>
                                                    <h4 className="fs-14 mb-0 fw-semibold">Spring Cleaning Discounts</h4>
                                                    <h6 className="text-gray fs-12 mb-0">22 Feb 2023</h6>
                                                </div>
                                                <div>
                                                    <a href="#" className="fs-12 text-gray text-decoration-none fw-semibold">
                                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.920123 8.71318C0.783936 8.49754 0.715842 8.38972 0.677724 8.22342C0.649092 8.0985 0.649092 7.9015 0.677724 7.77658C0.715842 7.61028 0.783936 7.50246 0.920122 7.28682C2.04553 5.50484 5.3954 1 10.5004 1C15.6054 1 18.9553 5.50484 20.0807 7.28682C20.2169 7.50246 20.285 7.61028 20.3231 7.77658C20.3517 7.9015 20.3517 8.0985 20.3231 8.22342C20.285 8.38972 20.2169 8.49754 20.0807 8.71318C18.9553 10.4952 15.6054 15 10.5004 15C5.3954 15 2.04553 10.4952 0.920123 8.71318Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M10.5004 11C12.1573 11 13.5004 9.65685 13.5004 8C13.5004 6.34315 12.1573 5 10.5004 5C8.84355 5 7.5004 6.34315 7.5004 8C7.5004 9.65685 8.84355 11 10.5004 11Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center p-2 border-b">
                                                <div>
                                                    <h4 className="fs-14 mb-0 fw-semibold">Memorial Day Blowout Sale</h4>
                                                    <h6 className="text-gray fs-12 mb-0">21 Feb 2023</h6>
                                                </div>
                                                <div>
                                                    <a href="#" className="fs-12 text-gray text-decoration-none fw-semibold">
                                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.920123 8.71318C0.783936 8.49754 0.715842 8.38972 0.677724 8.22342C0.649092 8.0985 0.649092 7.9015 0.677724 7.77658C0.715842 7.61028 0.783936 7.50246 0.920122 7.28682C2.04553 5.50484 5.3954 1 10.5004 1C15.6054 1 18.9553 5.50484 20.0807 7.28682C20.2169 7.50246 20.285 7.61028 20.3231 7.77658C20.3517 7.9015 20.3517 8.0985 20.3231 8.22342C20.285 8.38972 20.2169 8.49754 20.0807 8.71318C18.9553 10.4952 15.6054 15 10.5004 15C5.3954 15 2.04553 10.4952 0.920123 8.71318Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M10.5004 11C12.1573 11 13.5004 9.65685 13.5004 8C13.5004 6.34315 12.1573 5 10.5004 5C8.84355 5 7.5004 6.34315 7.5004 8C7.5004 9.65685 8.84355 11 10.5004 11Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center p-2 border-b">
                                                <div>
                                                    <h4 className="fs-14 mb-0 fw-semibold">Independence Day Celebrations</h4>
                                                    <h6 className="text-gray fs-12 mb-0">20 Feb 2023</h6>
                                                </div>
                                                <div>
                                                    <a href="#" className="fs-12 text-gray text-decoration-none fw-semibold">
                                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.920123 8.71318C0.783936 8.49754 0.715842 8.38972 0.677724 8.22342C0.649092 8.0985 0.649092 7.9015 0.677724 7.77658C0.715842 7.61028 0.783936 7.50246 0.920122 7.28682C2.04553 5.50484 5.3954 1 10.5004 1C15.6054 1 18.9553 5.50484 20.0807 7.28682C20.2169 7.50246 20.285 7.61028 20.3231 7.77658C20.3517 7.9015 20.3517 8.0985 20.3231 8.22342C20.285 8.38972 20.2169 8.49754 20.0807 8.71318C18.9553 10.4952 15.6054 15 10.5004 15C5.3954 15 2.04553 10.4952 0.920123 8.71318Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M10.5004 11C12.1573 11 13.5004 9.65685 13.5004 8C13.5004 6.34315 12.1573 5 10.5004 5C8.84355 5 7.5004 6.34315 7.5004 8C7.5004 9.65685 8.84355 11 10.5004 11Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center p-2 border-b">
                                                <div>
                                                    <h4 className="fs-14 mb-0 fw-semibold">Labor Day Savings Event</h4>
                                                    <h6 className="text-gray fs-12 mb-0">19 Feb 2023</h6>
                                                </div>
                                                <div>
                                                    <a href="#" className="fs-12 text-gray text-decoration-none fw-semibold">
                                                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.920123 8.71318C0.783936 8.49754 0.715842 8.38972 0.677724 8.22342C0.649092 8.0985 0.649092 7.9015 0.677724 7.77658C0.715842 7.61028 0.783936 7.50246 0.920122 7.28682C2.04553 5.50484 5.3954 1 10.5004 1C15.6054 1 18.9553 5.50484 20.0807 7.28682C20.2169 7.50246 20.285 7.61028 20.3231 7.77658C20.3517 7.9015 20.3517 8.0985 20.3231 8.22342C20.285 8.38972 20.2169 8.49754 20.0807 8.71318C18.9553 10.4952 15.6054 15 10.5004 15C5.3954 15 2.04553 10.4952 0.920123 8.71318Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M10.5004 11C12.1573 11 13.5004 9.65685 13.5004 8C13.5004 6.34315 12.1573 5 10.5004 5C8.84355 5 7.5004 6.34315 7.5004 8C7.5004 9.65685 8.84355 11 10.5004 11Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center p-2">
                                                <a href="#" className="border-gray text-decoration-none d-flex justify-content-center align-items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.8334 7H1.16675M1.16675 7L7.00008 12.8333M1.16675 7L7.00008 1.16667" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                </a>
                                                <h6 className="fs-12 text-gray">Page 1 of 10</h6>
                                                <a href="#" className="border-gray text-decoration-none d-flex justify-content-center align-items-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.16663 7H12.8333M12.8333 7L6.99996 1.16667M12.8333 7L6.99996 12.8333" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="h-100">
                        <Row>
                            <Col lg="12">
                                <RemindersMini/>
                            </Col>
                            <Col lg="12" className="mt-3">
                                <div className="">
                                    <div className="d-flex rounded-top justify-content-between align-items-center p-2 bg-lightblue">
                                        <div>
                                            <h3 className=" fw-bold fs-6 mb-0">Name</h3>
                                        </div>
                                        <div className="d-flex">
                                            <span>
                                                <a href="#" className="text-decoration-none">
                                                    <img src={VerticalDots3} />
                                                </a>
                                            </span>
                                            <span className="ps-2">
                                                <a href="#" className="text-decoration-none">
                                                    <img src={Cross} alt="" />
                                                </a>
                                            </span>

                                        </div>
                                    </div>
                                    <div className="bg-white p-2 reminder border-lightgray rounded-bottom rounded-0">
                                        <div className="form-floating">
                                            <textarea className="form-control fs-12 text-gray border-0 p-0" placeholder="Leave a comment here" id="floatingTextarea"></textarea>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="12">
                                <div className="border-lightgray mt-3 p-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3 className="text-gray fs-6 fw-bold mb-0">Branding</h3>
                                        <div>
                                            <a href="#" className="lightred-btn fw-semibold px-3 py-1 rounded-pill fs-6 text-danger text-decoration-none">High</a>
                                        </div>
                                    </div>
                                    <h3 className="fs-5 fw-bold mt-3">
                                        Outline promotional banner message
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


                                </div>
                            </Col>
                            <Col lg="12">
                                <div className="border-lightgray mt-3 p-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3 className="text-gray fs-6 fw-bold mb-0">Design</h3>

                                    </div>
                                    <h3 className="fs-5 fw-bold mt-3">
                                        Landing page design
                                    </h3>
                                    <p className="text-gray fs-6 mb-2">Placeholder for card text.<br />Enter text into this container.</p>
                                    <div className=" d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <div className="admin-img">
                                                <img src={Admin} />
                                            </div>
                                            <div className="admin-img-1">
                                                <img src={Admin} />
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="d-flex">
                                                <span><img src={Msg} /></span>
                                                <h6 className="fw-bold fs-6 fw-bold mb-0 ps-1 text-gray">12</h6>
                                            </div>
                                            <div className="d-flex ps-2">
                                                <span>
                                                    <img src={RoundTick} />
                                                </span>
                                                <h6 className="fw-bold fs-6 fw-bold mb-0 ps-1 text-gray">1/3</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="12" className="mt-3">
                                <a href="#" className=" btn gray-btn fw-bold fs-16 text-dark text-decoration-none w-100">View All</a>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col>
                    <div className="recent-signup">
                        <div className="mt-3 border-lightgray  py-2 px-2 " style={{border:'2px solid red'}}>
                            <div className="d-lg-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <h3 className="fw-bold fs-18 mb-0">Recent Enquiries</h3>
                                    <div className="ms-1">
                                        <h6 className="text-danger fs-12 mb-0 ads-bg rounded-pill px-2 py-1">10 Users</h6>
                                    </div>
                                </div>
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0001 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99998C10.8334 9.53974 10.4603 9.16665 10.0001 9.16665C9.53984 9.16665 9.16675 9.53974 9.16675 9.99998C9.16675 10.4602 9.53984 10.8333 10.0001 10.8333Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M10.0001 4.99998C10.4603 4.99998 10.8334 4.62688 10.8334 4.16665C10.8334 3.70641 10.4603 3.33331 10.0001 3.33331C9.53984 3.33331 9.16675 3.70641 9.16675 4.16665C9.16675 4.62688 9.53984 4.99998 10.0001 4.99998Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M10.0001 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.3731 10.4603 15 10.0001 15C9.53984 15 9.16675 15.3731 9.16675 15.8333C9.16675 16.2935 9.53984 16.6666 10.0001 16.6666Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-gray fw-semibold fs-12">User</th>
                                        <th className="text-gray fw-semibold fs-12">About</th>
                                        <th className="text-gray fw-semibold fs-12">Date</th>
                                        <th className="text-gray fw-semibold fs-12">Action11</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                   {/* { enquiriesList.users && enquiriesList.users.map((item) => { return (<>
                                    <tr>
                                        <td>
                                            <div className="d-flex">
                                                <div>
                                                    <img src={TabAvtar} />
                                                </div>
                                                <div className="ps-2">
                                                    <h6 className="fs-14 mb-0">{item.name}</h6>
                                                    <p className="fs-12 text-gray mb-0">coby11111@cfdigital.co.uk</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <h3 className="fs-14 mb-0">Content curating app</h3>
                                                <h6 className="fs-14 text-gray mb-0">Brings all your news into one place</h6>
                                            </div>
                                        </td>
                                        <td>Jan 6, 2023</td>
                                        <td>
                                            <img src={DotsVertical} />
                                        </td>
                                    </tr></>)
                                    })} */}
                                    <tr>
                                        <td>
                                            <div className="d-flex">
                                                <div>
                                                    <img src={TabAvtar} />
                                                </div>
                                                <div className="ps-2">
                                                    <h6 className="fs-14 mb-0">Lanasdfsdfsdfdsf Steiner</h6>
                                                    <p className="fs-12 text-gray mb-0">testttttcoby@cfdigital.co.uk</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <h3 className="fs-14 mb-0">Content curating app</h3>
                                                <h6 className="fs-14 text-gray mb-0">Brings all your news into one place</h6>
                                            </div>
                                        </td>
                                        <td>Jan 6, 2023</td>
                                        <td>
                                            <img src={DotsVertical} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex">
                                                <div>
                                                    <img src={TabAvtar} />
                                                </div>
                                                <div className="ps-2">
                                                    <h6 className="fs-14 mb-0">Koishik Ahmed</h6>
                                                    <p className="fs-12 text-gray mb-0">koishik@cfdigital.co.uk</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <h3 className="fs-14 mb-0">Content curating app</h3>
                                                <h6 className="fs-14 text-gray mb-0">Brings all your news into one place</h6>
                                            </div>
                                        </td>
                                        <td>Jan 6, 2023</td>
                                        <td>
                                            <img src={DotsVertical} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex">
                                                <div>
                                                    <img src={TabAvtar} />
                                                </div>
                                                <div className="ps-2">
                                                    <h6 className="fs-14 mb-0">Candice Wu</h6>
                                                    <p className="fs-12 text-gray mb-0">candice@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <h3 className="fs-14 mb-0">Content curating app</h3>
                                                <h6 className="fs-14 text-gray mb-0">Brings all your news into one place</h6>
                                            </div>
                                        </td>
                                        <td>Jan 6, 2023</td>
                                        <td>
                                            <img src={DotsVertical} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex">
                                                <div>
                                                    <img src={TabAvtar} />
                                                </div>
                                                <div className="ps-2">
                                                    <h6 className="fs-14 mb-0">Natali Craig</h6>
                                                    <p className="fs-12 text-gray mb-0">natali@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <h3 className="fs-14 mb-0">Content curating app</h3>
                                                <h6 className="fs-14 text-gray mb-0">Brings all your news into one place</h6>
                                            </div>
                                        </td>
                                        <td>Jan 6, 2023</td>
                                        <td>
                                            <img src={DotsVertical} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex">
                                                <div>
                                                    <img src={TabAvtar} />
                                                </div>
                                                <div className="ps-2">
                                                    <h6 className="fs-14 mb-0">Drew Cano</h6>
                                                    <p className="fs-12 text-gray mb-0">drew@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <h3 className="fs-14 mb-0">Content curating app</h3>
                                                <h6 className="fs-14 text-gray mb-0">Brings all your news into one place</h6>
                                            </div>
                                        </td>
                                        <td>Jan 6, 2023</td>
                                        <td>
                                            <img src={DotsVertical} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex">
                                                <div>
                                                    <img src={TabAvtar} />
                                                </div>
                                                <div className="ps-2">
                                                    <h6 className="fs-14 mb-0">Orlando Diggs</h6>
                                                    <p className="fs-12 text-gray mb-0">orlando@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>

                                        </td>
                                        <td>Jan 6, 2023</td>
                                        <td>
                                            <img src={DotsVertical} />
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className="d-flex justify-content-between align-items-center p-2 pb-0">
                                <a href="#" className="border-lightgray text-decoration-none d-flex py-1 px-3 justify-content-center text-dark fs-12 text-decoration-none align-items-center"><svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8334 7H1.16675M1.16675 7L7.00008 12.8333M1.16675 7L7.00008 1.16667" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                    <span className='ps-2'>Previous</span>
                                </a>
                                <div className='pagination'>
                                    <ul className='list-unstyled d-flex mb-0'>
                                        <li className='pe-3'>
                                            <a href="#" className='text-dark text-decoration-none fs-12'>1</a>
                                        </li>
                                        <li className='pe-3'>
                                            <a href="#" className='text-dark text-decoration-none fs-12'>2</a>
                                        </li>
                                        <li className='pe-3'>
                                            <a href="#" className='text-dark text-decoration-none fs-12'>3</a>
                                        </li>
                                        <li className='pe-3'>
                                            <a href="#" className='text-dark text-decoration-none fs-12'>...</a>
                                        </li>
                                        <li className='pe-3'>
                                            <a href="#" className='text-dark text-decoration-none fs-12'>8</a>
                                        </li>
                                        <li className='pe-3'>
                                            <a href="#" className='text-dark text-decoration-none fs-12'>9</a>
                                        </li>
                                        <li className='pe-3'>
                                            <a href="#" className='text-dark text-decoration-none fs-12'>10</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="border-lightgray text-decoration-none d-flex  py-1 px-3 justify-content-center align-items-center text-dark fs-12 text-decoration-none"> <span className='pe-2'>Next</span><svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16663 7H12.8333M12.8333 7L6.99996 1.16667M12.8333 7L6.99996 12.8333" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                </a>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
        </Col>

    </Row>
</div>
}
export default Home;