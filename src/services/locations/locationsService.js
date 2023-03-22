import { getRequest } from '../axios';
/**
 * Api call
 */
class locationsService {

    getList = async (urlParam={},payload) =>{
       return await getRequest('dashboard/locations?dsfasd=sdf',urlParam);
        }

}

const instance = new locationsService();

export default instance;