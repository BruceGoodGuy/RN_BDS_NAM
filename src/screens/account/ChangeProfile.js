/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Text, View, TextInput, SafeAreaView,TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import { COLORS, ROUTES } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import { showAlert, showAlertError } from '../Utils/Alert';
import authHook from '../../Actions/Auth/AuthHook';
import { api } from '../Services/Api';
import moment from 'moment';

const ChangeProfile = (props) => {
  const navigation = useNavigation();
  const data = props.route.params.item;
  const [name, setName] = React.useState(data ? data.name : '');
  const [phoneNumber, setPhoneNumber] = React.useState(data ? data.phonenumber : '');
  const [address, setAddress] = React.useState(data ? data.address : '');
  const [birth, setBirth] = React.useState(data ? moment(data.birthday).format('DD/MM/YYYY') : '');
  const {token} = authHook();
  const update = async() =>{
    try {
      if (token){
        const payload = {
          requestid: data.id,
          name:name,
          phonenumber: phoneNumber,
          address: address,
          dateofbirth: birth,
          roles:'guest',
        };
        const res = await api.put('/setting/user/update', payload, {
          headers: {
            'Authorization': 'Bearer ' + token,
          },
        });
        showAlert({title: 'Thành công ', message: 'Cập nhật tài khoản thành công'});
        navigation.goBack();
      }
    } catch (error) {
      showAlertError({message: error.data.message});
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wFull}>
            <View style={styles.changeBox}>
              <Text style={styles.footerText}>Họ tên</Text>
              <TextInput style={styles.input} value={name ? name : ''} onChangeText={setName} placeholder="Nhập họ tên" />
            </View>
            <View style={styles.changeBox}>
              <Text style={styles.footerText}>Ngày sinh</Text>
              <TextInput style={styles.input} value={birth ? birth : ''} onChangeText={setBirth} placeholder="Nhập ngày sinh" />
            </View>
            <View style={styles.changeBox}>
              <Text style={styles.footerText}>Số điện thoại</Text>
              <TextInput style={styles.input} value={phoneNumber ? phoneNumber : ''} onChangeText={setPhoneNumber} placeholder="Nhập số điện thoại" />
            </View>
            <View style={styles.changeBox}>
              <Text style={styles.footerText}>Địa chỉ</Text>
              <TextInput style={styles.input} value={address ? address : ''} onChangeText={setAddress} placeholder="Nhập địa chỉ" />
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
                  onPress={() => update()}
                  >
                  <Text style={styles.loginText}>Cập nhật</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 16,
    backgroundColor:'#FFF',
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

export default ChangeProfile;
