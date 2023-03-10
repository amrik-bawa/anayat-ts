import TabAvtar from "../../assets/images/tab-avtar.png";
import DotsVertical from "../../assets/images/dots-vertical.svg";
const AdvertManager=()=>{
    return <div className="recent-signup">
    <div className="mt-3 border-lightgray  py-2 px-2 " style={{border:'2px solid red'}}>
        <div className="d-lg-flex justify-content-between">
            <div className="d-flex align-items-center">
                <h3 className="fw-bold fs-18 mb-0">Live Advert</h3>
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
                    <th className="text-gray fw-semibold fs-12">Name</th>
                    <th className="text-gray fw-semibold fs-12">Advert</th>
                    <th className="text-gray fw-semibold fs-12">Advert Date</th>
                    <th className="text-gray fw-semibold fs-12">Post</th>
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
}

export default AdvertManager;