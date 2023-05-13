/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, ROUTES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import { showAlertError } from '../Utils/Alert';
import { api } from '../Services/Api';
import { getNumberPhone, saveNumberPhone } from '../../Actions/Auth/Auth';
import { useDispatch } from 'react-redux';
import { login } from '../../Actions/auth';

const Login = props => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const login = async () =>{
    navigation.navigate(ROUTES.HOME);
    // try {
    //   if (phoneNumber != '' && password != ''){
    //     const response = await api.post('/login', {
    //       phonenumber: phoneNumber,
    //       password : password,
    //     });
    //     // const tokenLogin =  response.data.token;
    //     // saveNumberPhone({phoneNumber, tokenLogin});
    //     // navigation.navigate(ROUTES.HOME);
    //   } else {
    //     showAlertError({message: 'Vui lòng không để trống thông tin đăng nhập'});
    //   }
    // } catch (error) {
    //   showAlertError({message: error.data.message});
    // }
   };
  //  const fetchPhoneNumber = async () => {
  //   try {
  //     const latestNumber = await getNumberPhone();
  //     const data = JSON.parse(latestNumber);
  //     if (data.phoneNumber) {
  //       setPhoneNumber(data.phoneNumber);
  //     } else {
  //       setPhoneNumber('');
  //     }
  //   } catch (error) {}
  // };

  useEffect(() => {
   // fetchPhoneNumber();
  }, []);



  // const dispatch = useDispatch();
  // const onLogin = () => {
  //   let user = {
  //     phonenumber: phoneNumber,
  //     password: password,
  //   };
  //   if (phoneNumber != '' && password != ''){
  //      dispatch(login(user));
  //     //  .then(response => {
  //     //   console.log('aaa: ', response);
  //     //   // if (response) {
  //     //   //   navigation.navigate(ROUTES.HOME);
  //     //   // }
  //     // })
  //     // .catch(error => {
  //     //   showAlertError({message: error.data.message});
  //     // });
  //   } else {
  //       showAlertError({message: 'Vui lòng không để trống thông tin đăng nhập'});
  //     }
  //   };
  return (
    <ScrollView>
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Image style={styles.mr7} source={require('../../assets/logo.png')} />
            <Text style={styles.brandName}>App Bất Động Sản</Text>
          </View>

          <Text style={styles.loginContinueTxt}>Đăng nhập để tiếp tục</Text>
          <TextInput style={styles.input} onChangeText={setPhoneNumber} keyboardType="numeric" value={phoneNumber} placeholder="Số Điện thoại" />
          <TextInput style={styles.input} onChangeText={setPassword} value={password} secureTextEntry={true} placeholder="Mật khẩu" />

          <View style={styles.loginBtnWrapper}>
            <LinearGradient
              colors={[COLORS.gradientForm, COLORS.primary]}
              style={styles.linearGradient}
              start={{y: 0.0, x: 0.0}}
              end={{y: 1.0, x: 0.0}}>
              {/******************** LOGIN BUTTON *********************/}
              <TouchableOpacity
                onPress={() => login()}
                activeOpacity={0.7}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Đăng Nhập</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          {/***************** FORGOT PASSWORD BUTTON ****************TouchableOpacity*/}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTES.FORGOT_PASSWORD, {
                userId: 'X0001',
              })
            }
            style={styles.forgotPassBtn}>
            <Text style={styles.forgotPassText}>Quên Mật Khẩu?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Không có tài khoản? </Text>
          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity
            onPress={() =>  navigation.navigate(ROUTES.REGISTER)}>
            <Text style={styles.signupBtn}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    width:100,
    height:100,
  },
});
