/* eslint-disable prettier/prettier */
import axios from 'axios';
import { API_URL } from './constants';
import handleError from './utils/handleError';

const api = axios.create({
  headers: {
    'Accept': 'application/json',
    'headers':{
        'Authorization':'',
    },
  },
  timeout: 1000,
});

api.defaults.withCredentials = true;

api.interceptors.request.use(async config => {
  config.url = API_URL + config.url;
  return config;
});

api.interceptors.response.use(
  response => response,
  ({message, response = {}}) => {
    const {data, status} = response;
    return handleError({message, data, status});
  },
);

export {api, handleError};
