import { getRequest } from '../../axios';
/**
 * Api call
 */
class usersService {

    getList = async (urlParam={},payload) =>{
       return await getRequest('dashboard/users/customers?records_per_page=10',urlParam);
        }
    getDetails = async (urlParam={},payload) =>{
        return await getRequest('dashboard/users/get/1329?sdf=sdfd',urlParam);
            }    

}

const instance = new usersService();

export default instance;