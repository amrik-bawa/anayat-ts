import { getRequest } from '../../axios';
/**
 * Api call
 */
class administratorsService {

    getList = async (urlParam={},payload) =>{
       return await getRequest('dashboard/users/administrator?records_per_page=3',urlParam);
        }

}

const instance = new administratorsService();

export default instance;