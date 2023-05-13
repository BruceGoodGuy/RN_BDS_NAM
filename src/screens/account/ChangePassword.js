/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {StyleSheet, Text, View, TextInput, SafeAreaView,TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import { COLORS, ROUTES } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import { api } from '../Services/Api';
import { showAlertError } from '../Utils/Alert';
import authHook from '../../Actions/Auth/AuthHook';

const ChangePassword = () => {
  const navigation = useNavigation();
  const [oldPass, setOldPass] = useState();
  const [newPass, setNewPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const {token} = authHook();
  const payload = {oldPass, newPass, confirmPass};
  console.log(payload);
  const changePass = async () =>{
    try {
      if (!oldPass) {
        showAlertError({ message: 'Vui lòng nhập mật khẩu cũ' });
        return;
      } else if (!newPass) {
        showAlertError({ message: 'Vui lòng nhập mật khẩu mới' });
        return;
      } else if (!confirmPass) {
        showAlertError({ message: 'Vui lòng nhập xác nhận mật khẩu' });
        return;
      }
      if (newPass != confirmPass) {
        showAlertError({ message: 'Xác nhận mật khẩu và mật khẩu không khớp!' });
        return;
      }
      const res = await api.patch('/setting/user/password', payload,{
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
    } catch (error) {
      showAlertError({message: error.data.message});
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity hitSlop={10} onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/icons/goBack.png')} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wFull}>
            <View style={styles.row}>
              {/* <Logo width={55} height={55} style={styles.mr7} /> */}
              <Text style={styles.brandName}>Đổi Mật Khẩu</Text>
            </View>
            <View style={styles.changeBox}>
              <Text style={styles.footerText}>Mật khẩu cũ</Text>
              <TextInput style={styles.input} onChangeText={setOldPass} value={oldPass} placeholder="Nhập mật khẩu cũ" />
            </View>
            <View style={styles.changeBox}>
              <Text style={styles.footerText}>Mật khẩu mới</Text>
              <TextInput style={styles.input} onChangeText={setNewPass} value={newPass} placeholder="Nhập mật khẩu mới" />
            </View>
            <View style={styles.changeBox}>
              <Text style={styles.footerText}>Nhập lại mật khẩu mới</Text>
              <TextInput style={styles.input} onChangeText={setConfirmPass} value={confirmPass} placeholder="Nhập lại mật khẩu mới" />
            </View>
            <View style={styles.loginBtnWrapper}>
              <LinearGradient
                colors={[COLORS.gradientForm, COLORS.primary]}
                style={styles.linearGradient}
                start={{y: 0.0, x: 0.0}}
                end={{y: 1.0, x: 0.0}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.loginBtn}
                  onPress={() => changePass()}>
                  <Text style={styles.loginText}>Xác Nhận</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  brandName: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.9,
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
    marginLeft:5,
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
  changeBox:{
    marginVertical:10,
  },
});
