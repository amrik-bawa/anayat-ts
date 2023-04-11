import { getRequest, postRequest } from '../../axios';
/**
 * Api call
 */

class usersService {

    getList = async (urlParam = {}, payload) => {
        return await getRequest('dashboard/users/customers?records_per_page=10', urlParam);
    }
    getDetails = async (urlParam = {}, payload) => {
        return await getRequest('dashboard/users/get/1329?sdf=sdfd', urlParam);
    }
    updateDetails = async (payload) => {
        console.log('payload on service ',payload)
        return postRequest('dashboard/users/update/1329?sdjhvjvf=sdfd', payload)
    }

}

const instance = new usersService();

export default instance;