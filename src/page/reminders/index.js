import DotsVertical from "../../assets/images/dots-vertical.svg";
import { getRemindersList } from "../../store/reminders/remindersSlice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {DiscProgress,NoRecordsFound} from "../common/ResponseDisplay";
import Pagination from "react-js-pagination";

const Reminders=()=>{

		const dispatch = useDispatch()
		const { remindersData,loadingStatus } = useSelector((state) => state.reminders)
	
		useEffect(() => {
			dispatch(getRemindersList()).then(()=>{
			})
		}, [])
		return <>
		<div className="recent-signup">
     <div className="mt-3 border-lightgray  py-2 px-2 ">
         <div className="d-lg-flex justify-content-between">
             <div className="d-flex align-items-center">
                 <h3 className="fw-bold fs-18 mb-0">Reminders</h3>
                 <div className="ms-1">
                     <h6 className="text-danger fs-12 mb-0 ads-bg rounded-pill px-2 py-1">{(remindersData) ? remindersData.length:'N/a'} Records found</h6>
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
			}else if(remindersData  && remindersData.length>0){
				
				return <>
				<table className="table mb-0">
				<thead>
					<tr>
						<th className="text-gray fw-semibold fs-12">Title</th>
						<th className="text-gray fw-semibold fs-12">Content</th>
						<th className="text-gray fw-semibold fs-12">Priority</th>
						<th className="text-gray fw-semibold fs-12">Category</th>
					</tr>
				</thead>
				<tbody>
				  
				   { remindersData && remindersData.map((item) => { 
					
					return (<>
					<tr >
						<td>{item.title}</td>
						<td>{item.content}</td>
						<td>{item.priority}</td>
						<td>{item.category}</td>
						<td>
							<img src={DotsVertical} />
						</td>
					</tr></>)
					})}
				   
   
				</tbody>
			</table>
			<Pagination
			activePage={1}
			itemsCountPerPage={5}
			totalItemsCount={450}
			pageRangeDisplayed={10}
			prevPageText='Previous'
			nextPageText='Next'
			firstPageText=''
			lastPageText=''
			onChange={(pageNumber)=>{dispatch(getRemindersList({page:pageNumber}))}}
		  />
		  </>
			}else{
				return <NoRecordsFound/>
			}
		})()}

     </div>
 </div>
		</>

     
         
}

export default Reminders;