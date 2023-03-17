import { getRequest,postRequest } from '../axios';
/**
 * Api call
 */
class remindersService {
    get_categories_list = async (urlParam={},payload) =>{
        return await getRequest('dashboard/reminder/cats?gdfgg=gfcg',urlParam);
         }

    get_list = async (urlParam={},payload) =>{
        return await getRequest('dashboard/reminder/?dfdf=dss',urlParam);
         }

         addNew = async (payload) =>{
    return await postRequest('dashboard/reminder?df=dss',payload);
        }   
        


}

const instance = new remindersService();

export default instance;

