import { getRequest } from '../axios';
/**
 * Api call
 */
class enquiriesService {

    getList = async (payload) =>{
       return await getRequest('dashboard/recent/signups?records_per_page=10');
        }

}




const instance = new enquiriesService();

export default instance;

