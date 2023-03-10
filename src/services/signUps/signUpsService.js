import { getRequest } from '../axios';
/**
 * Api call
 */
class signUpsService {

    getList = async (urlParam={},payload) =>{
       return await getRequest('dashboard/recent/signups?records_per_page=10',urlParam);
        }

}

const instance = new signUpsService();

export default instance;

