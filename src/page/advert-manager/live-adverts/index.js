import TabAvtar from "../../../assets/images/tab-avtar.png";
import DotsVertical from "../../../assets/images/dots-vertical.svg";
import { getLiveAdvertsList } from "../../../store/adverts/advertsSlice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import {DiscProgress,NoRecordsFound} from "../../common/ResponseDisplay";
import Pagination from "react-js-pagination";

const LiveAdverts=()=>{

		const dispatch = useDispatch()
		const { liveAdvertsList,loadingStatus } = useSelector((state) => state.adverts)
	
		useEffect(() => {
			dispatch(getLiveAdvertsList())
		}, [dispatch])

		let keyid=0;
		return <>
		<div className="recent-signup">
     <div className="mt-3 border-lightgray  py-2 px-2 ">
         <div className="d-lg-flex justify-content-between">
             <div className="d-flex align-items-center">
                 <h3 className="fw-bold fs-18 mb-0">Live Advert</h3>
                 <div className="ms-1">
                     <h6 className="text-danger fs-12 mb-0 ads-bg rounded-pill px-2 py-1">10 Users</h6>
                 </div>
             </div>
             <div>
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
                     <path d="M10.0001 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99998C10.8334 9.53974 10.4603 9.16665 10.0001 9.16665C9.53984 9.16665 9.16675 9.53974 9.16675 9.99998C9.16675 10.4602 9.53984 10.8333 10.0001 10.8333Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                     <path d="M10.0001 4.99998C10.4603 4.99998 10.8334 4.62688 10.8334 4.16665C10.8334 3.70641 10.4603 3.33331 10.0001 3.33331C9.53984 3.33331 9.16675 3.70641 9.16675 4.16665C9.16675 4.62688 9.53984 4.99998 10.0001 4.99998Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                     <path d="M10.0001 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.3731 10.4603 15 10.0001 15C9.53984 15 9.16675 15.3731 9.16675 15.8333C9.16675 16.2935 9.53984 16.6666 10.0001 16.6666Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                 </svg>
             </div>
         </div>
		
		{(()=>{
			if(loadingStatus){
				return <DiscProgress height='500px'/>
			}else if(liveAdvertsList && liveAdvertsList.subscriptions && liveAdvertsList.subscriptions.length>0){
				return <>
				<table className="table mb-0">
				<thead>
					<tr>
						<th className="text-gray fw-semibold fs-12">Name</th>
						<th className="text-gray fw-semibold fs-12">Advert</th>
						<th className="text-gray fw-semibold fs-12">Advert Date</th>
						<th className="text-gray fw-semibold fs-12">Post</th>
						<th className="text-gray fw-semibold fs-12">Active Subscriber</th>
					</tr>
				</thead>
				<tbody>
				  
				   { liveAdvertsList && liveAdvertsList.subscriptions && liveAdvertsList && liveAdvertsList.subscriptions.map((item) => { 
					
					return (<>
					<tr key={keyid++}>
						<td>
							<div className="d-flex">
								<div>
								{(item.user_pic)?<img style={{width:'15px',height:'15px'}} src={item.user_pic} />:'NA'}
								</div>
								<div className="ps-2">
									<h6 className="fs-14 mb-0">{item.name}</h6>
									<p className="fs-12 text-gray mb-0">{item.customer_id}</p>
								</div>
							</div>
						</td>
						<td>
							<p>{item.advert_title}</p>
						</td>
						<td><p>{item.start_date} - {item.end_date}</p></td>
						<td>--PENDING</td>
						<td>--PENDING</td>
						<td>
							<img src={DotsVertical} />
						</td>
					</tr></>)
					})}
				   
   
				</tbody>
			</table>
			
		  </>
			}else{
				return <NoRecordsFound/>
			}
		})()}
<Pagination
			activePage={1}
			itemsCountPerPage={5}
			totalItemsCount={450}
			pageRangeDisplayed={10}
			prevPageText='Previous'
			nextPageText='Next'
			firstPageText=''
			lastPageText=''
			onChange={(pageNumber)=>{dispatch(getLiveAdvertsList({page:pageNumber}))}}
		  />
<div className="d-flex justify-content-between align-items-center p-2 pb-0">
             <a href="#" className="border-lightgray text-decoration-none d-flex py-1 px-3 justify-content-center text-dark fs-12 text-decoration-none align-items-center"><svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http:www.w3.org/2000/svg">
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
             <a href="#" className="border-lightgray text-decoration-none d-flex  py-1 px-3 justify-content-center align-items-center text-dark fs-12 text-decoration-none"> <span className='pe-2'>Next</span><svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http:www.w3.org/2000/svg">
                 <path d="M1.16663 7H12.8333M12.8333 7L6.99996 1.16667M12.8333 7L6.99996 12.8333" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
             </svg>

             </a>
         </div>
     </div>

 </div>
		</>

     
         
}

export default LiveAdverts;