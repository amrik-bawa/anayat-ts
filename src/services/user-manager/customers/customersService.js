import { getRequest } from '../../axios';
/**
 * Api call
 */
class customersService {

    getList = async (urlParam={},payload) =>{
       return await getRequest('dashboard/users/customers?records_per_page=10',urlParam);
        }

}

const instance = new customersService();

export default instance;