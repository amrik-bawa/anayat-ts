import axios from 'axios';

const axiosClient = axios.create();
const access_token=localStorage.getItem('token')

axiosClient.defaults.baseURL = 'https://transbunnies.com/dev/wp-json/';

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 10000;

axiosClient.defaults.withCredentials = false;


export function getRequest(URL,urlParam) {
  return axiosClient.get(`/${URL}`,
  {
    params:urlParam,
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  }
  )
}

export async function  postRequest(URL, payload,otherData) {
  return await axiosClient.post(`/${URL}`, payload,otherData).then(response => response);
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then(response => response);
}