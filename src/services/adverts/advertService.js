import { getRequest } from '../axios';
/**
 * Api call
 */
class advertService {

    getLiveList = async (urlParam={},payload) =>{
        return await getRequest('dashboard/live/adverts?records_per_page=10',urlParam);
         }
    
    getLocations = async (urlParam={data:'test'},payload) =>{
    return await getRequest('dashboard/advert/locations?test=abcgg',urlParam);
        }     

}

const instance = new advertService();

export default instance;

