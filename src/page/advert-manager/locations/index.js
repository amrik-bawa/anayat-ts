import TabAvtar from "../../../assets/images/tab-avtar.png";
import DotsVertical from "../../../assets/images/dots-vertical.svg";
import { getAdvertsLocations } from "../../../store/adverts/advertsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { DiscProgress, NoRecordsFound } from "../../common/ResponseDisplay";
import Pagination from "react-js-pagination";
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import EditTsOfTheWeek from './EditTsOfTheWeek'


const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	bgcolor: 'background.paper',
	border: '1px solid pink',
	borderRadius:'15px',
	boxShadow: 24,
	p: 4,
  };

const Locations = () => {

	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const[selectedKey,setSelectedKey]=useState('')


	const dispatch = useDispatch()
	const { advertsLocationsList, loadingStatus } = useSelector((state) => state.adverts)

	useEffect(() => {
		dispatch(getAdvertsLocations())
		console.log(advertsLocationsList)
	}, [])

	const handleEditing=(_key)=>{
		setSelectedKey(_key);
		handleOpen();
	}
	console.log('adverts list',advertsLocationsList)
	let keyid = 0;
	return <>
		<div className="recent-signup">
		<Modal open={open}    onClose={handleClose}     aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
			<EditTsOfTheWeek details={advertsLocationsList[selectedKey]} dafault_spaces={advertsLocationsList[selectedKey]?.default_spaces} advert_price={advertsLocationsList[selectedKey]?.price}/>
		</Box>

      </Modal>
			<div className="mt-3 border-lightgray  py-2 px-2 ">
				<div className="d-lg-flex justify-content-between">
					<div className="d-flex align-items-center">
						<h3 className="fw-bold fs-18 mb-0">Advert Locations</h3>
						<div className="ms-1"></div>
					</div>
					<div>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
							<path d="M10.0001 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99998C10.8334 9.53974 10.4603 9.16665 10.0001 9.16665C9.53984 9.16665 9.16675 9.53974 9.16675 9.99998C9.16675 10.4602 9.53984 10.8333 10.0001 10.8333Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
							<path d="M10.0001 4.99998C10.4603 4.99998 10.8334 4.62688 10.8334 4.16665C10.8334 3.70641 10.4603 3.33331 10.0001 3.33331C9.53984 3.33331 9.16675 3.70641 9.16675 4.16665C9.16675 4.62688 9.53984 4.99998 10.0001 4.99998Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
							<path d="M10.0001 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.3731 10.4603 15 10.0001 15C9.53984 15 9.16675 15.3731 9.16675 15.8333C9.16675 16.2935 9.53984 16.6666 10.0001 16.6666Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>
					</div>
				</div>

				{(() => {
					if (loadingStatus) {
						return <DiscProgress height='500px' />
					} else if (advertsLocationsList) {

						const keys = Object.keys(advertsLocationsList);



						return <>
							<table className="table mb-0">
								<thead>
									<tr>
										<th className="text-gray fw-semibold fs-12">Name</th>
										<th className="text-gray fw-semibold fs-12">Current Adverts</th>
										<th className="text-gray fw-semibold fs-12">Available Spaces</th>
										<th className="text-gray fw-semibold fs-12">Default Spaces</th>
										<th className="text-gray fw-semibold fs-12">Active Subscriber</th>
									</tr>
								</thead>
								<tbody>

									{keys.map((item) => {
										let row=advertsLocationsList[item];
										return (<>
											<tr key={row.title}>
												<td>{row.title}</td>
												<td>{row.current_adverts}</td>
												<td>{row.available_spaces}</td>
												<td>{row.default_spaces}</td>
												<td>--PENDING</td>
												<td onClick={()=>handleEditing(item)}><img src={DotsVertical} /></td>
											</tr></>)
									


									})}







								</tbody>
							</table>

						</>
					} else {
						return <NoRecordsFound />
					}
				})()}
			</div>

		</div>
	</>



}

export default Locations;