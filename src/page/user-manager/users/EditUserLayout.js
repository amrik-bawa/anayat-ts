import { Outlet } from "react-router";
import StepTabs from "../../common/StepTabs";
import './EditUserLayout.css';

const EditUserLayout=()=>{
const stepTabsList=[
    {title:'1. My Details',link:'/user-manager/edit-user/my-details'},
    {title:'2. Media',link:'/user-manager/edit-user/media'},
    {title:'3. Paid ads',link:'/user-manager/edit-user/paid-ads'},
]


return <>
<br/>
            <StepTabs list={stepTabsList}/>
            <Outlet/>
        </>
}
export default EditUserLayout;