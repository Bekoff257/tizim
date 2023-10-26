import axios from "axios";

const instance = axios.create({
  baseURL: 'http://95.130.227.6:4440/v1',
  timeout: 10000,
  headers: {
    'Content-Type' : 'application/json'
  }
})

instance.interceptors.request.use((config) => {
  const userToken = localStorage.getItem('usertoken');

  if(userToken) {
    config.headers.Authorization = `${userToken}`;
  }

  return config
})

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if(error.response.status === 401 || error.response.status === 403){
      localStorage.removeItem('usertoken')
      window.location.href = '/'
    }
  }
)

export { instance }