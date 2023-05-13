/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, ROUTES } from '../../constants';
import {useNavigation} from '@react-navigation/native';
import { showAlert, showAlertError } from '../Utils/Alert';
import { api } from '../Services/Api';

const Register = () => {

  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [address, setAddress] = useState('');
  const [referral, setReferral] = useState('');
  const handlePhone = text => {
    setPhone(text);
  };
  const handlePassword = text => {
    setPassword(text);
  };
  const handleRepassword = text => {
    setPassConfirm(text);
  };
  const handleName = text => {
    setName(text);
  };
  const handleBirth = text => {
    setBirth(text);
  };
  const handleAddress = text => {
    setAddress(text);
  };
  const handleReferral = text => {
    setReferral(text);
  };

  const register = async() =>{
    try {
      const payload = {
        phonenumber: phone,
        password: password,
        password_confirmation: passConfirm,
        name: name,
        dateofbirth: birth,
        address: address,
        referralcode: referral,
        roles:'guest',
      };
      console.log('payload', payload);
      if (!name) {
        showAlertError({message: 'Vui lòng nhập tên'});
        return;
      }
      if (!phone) {
        showAlertError({message: 'Vui lòng nhập số điện thoại'});
        return;
      }
      if (!password) {
        showAlertError({message: 'Vui lòng nhập mật khẩu'});
        return;
      }
      if (password != passConfirm) {
        showAlertError({message: 'Mật khẩu và Nhập lại mật khẩu không giống trùng khớp'});
        return;
      }
      if (!birth) {
        showAlertError({message: 'Vui lòng nhập ngày sinh'});
        return;
      }
      if (!address) {
        showAlertError({message: 'Vui lòng nhập địa chỉ'});
        return;
      }
      const res = await api.post('/user/create', payload);
      showAlert({title: 'Thành công ', message: 'Tạo tài khoản thành công'});
      navigation.navigate(ROUTES.LOGIN);
    } catch (error) {
      showAlertError({ message: error.data.message });
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <TouchableOpacity hitSlop={10} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/goBack.png')} />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.wFull}>
            <View style={styles.row}>
              {/* <Logo width={55} height={55} style={styles.mr7} /> */}
              <Text style={styles.brandName}>Đăng Ký Tài Khoản</Text>
            </View>
            <TextInput style={styles.input} value={name} onChangeText={(text)=> handleName(text)} placeholder="Nhập họ tên" />
            <TextInput style={styles.input} value={phone} onChangeText={(text)=> handlePhone(text)} keyboardType="numeric" placeholder="Nhập số điện thoại" />
            <TextInput style={styles.input} value={password} onChangeText={(text)=> handlePassword(text)} secureTextEntry={true} placeholder="Nhập mật khẩu" />
            <TextInput style={styles.input} value={passConfirm} onChangeText={(text)=> handleRepassword(text)} secureTextEntry={true} placeholder="Nhập lại mật khẩu" />
            <TextInput style={styles.input} value={birth} onChangeText={(text)=> handleBirth(text)} placeholder="Nhập ngày sinh" />
            <TextInput style={styles.input} value={referral} onChangeText={(text)=> handleReferral(text)} placeholder="Nhập mã giới thiệu" />
            <TextInput style={styles.input} value={address} onChangeText={(text)=> handleAddress(text)} placeholder="Nhập Địa chỉ" />

            <View style={styles.loginBtnWrapper}>
              <LinearGradient
                colors={[COLORS.gradientForm, COLORS.primary]}
                style={styles.linearGradient}
                start={{y: 0.0, x: 0.0}}
                end={{y: 1.0, x: 0.0}}>
                <TouchableOpacity
                  onPress={() => register()}
                  activeOpacity={0.7}
                  style={styles.loginBtn}>
                  <Text style={styles.loginText}>Đăng Ký Tài Khoản</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ROUTES.LOGIN)
              }
              style={styles.forgotPassBtn}>
              <Text style={styles.footerText}>Bạn đã có tài khoản? <Text style={styles.forgotPassText}>Đăng nhập</Text></Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
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
    fontSize: 30,
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
    position: 'absolute',
    bottom: 20,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
  forgotPassBtn:{
    margin:15,
    alignItems:'center',
  },
});
