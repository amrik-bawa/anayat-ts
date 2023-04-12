import { getRequest, postRequest } from '../axios';
/**
 * Api call
 */
class advertService {

    getLiveList = async (urlParam = {}, payload) => {
        return await getRequest('dashboard/live/adverts?records_per_page=10', urlParam);
    }

    getLocations = async (urlParam = { data: 'test' }, payload) => {
        return await getRequest('dashboard/advert/locations?test=abcgg', urlParam);
    }
    updateLocations = async (payload,otherData) => {
        return await postRequest('dashboard/advert/locations?test=abcgg', payload,otherData);
    }

}

const instance = new advertService();

export default instance;

