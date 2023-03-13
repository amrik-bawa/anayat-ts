import { postRequest } from '../axios';
/**
 * Api call
 */
class loginService {

    login = async (payload) =>{
       return await postRequest('jwt-auth/v1/token',payload);
        }

}

const instance = new loginService();

export default instance;

