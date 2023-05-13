/* eslint-disable prettier/prettier */
import {LOGIN_SUCCESS, LOGOUT} from './type';
import AuthService from '../Services/authService';
export const login = user => dispatch => {
  //console.log('xin chao: ', user);
  return AuthService.logIn(user);
  //   response => {
      
  //     // if (response) {
  //     //   dispatch({
  //     //     type: LOGIN_SUCCESS,
  //     //     payload: {user: response.user},
  //     //   });
  //     //   Promise.resolve();
  //     //   return response;
  //     // }
  //   },
  // );
};
export const logout = () => dispatch => {
  return AuthService.logOut().then(response => {
    if (response.status === 'success') {
      dispatch({
        type: LOGOUT,
      });
      Promise.resolve();
      return response;
    }
  });
};
