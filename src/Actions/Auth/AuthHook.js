/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import { getNumberPhone } from './Auth';
const authHook = () => {
    const [token, setToken] = useState();
    const getToken = async() =>{
        const tokenLogin = await getNumberPhone();
        const data = JSON.parse(tokenLogin);
        setToken(data.tokenLogin);
    };
  useEffect(() => {
    getToken();
  }, [token]);
  return {token: token};
};
export default authHook;

