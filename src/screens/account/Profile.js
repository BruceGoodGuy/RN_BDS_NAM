/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, ScrollView, View, Image, SafeAreaView, StyleSheet, TouchableOpacity, RefreshControl} from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { COLORS, ROUTES } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import { api } from '../Services/Api';
import { showAlertError } from '../Utils/Alert';
import authHook from '../../Actions/Auth/AuthHook';
import moment from 'moment';

const Profile = () => {
  const navigation = useNavigation();
  const [name, setName] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [address, setAddress] = React.useState();
  const [birth, setBirth] = React.useState();
  const [dataPro, setDataPro] = React.useState();
  const {token} = authHook();
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();
  const getUser = async () =>{
    try {
      const response = await api.get('/user/profile', {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
      const res = response.data;
      setDataPro(res);
      setName(res.name);
      setPhoneNumber(res.phonenumber);
      setAddress(res.address);
      setBirth(moment(res.birthday).format(('DD/MM/YYYY')));
    } catch (error) {
        showAlertError({message:error.data.message});
    }
  };
  const ChangePro = (item) =>{
    navigation.navigate(ROUTES.CHANGEPROFILE,{item});
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getUser();
    }, 1000);
  }, []);
  React.useEffect(()=>{
    if (token) {
      getUser();
    }
  },[token, isFocused]);
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView  refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.accBox}>
          <View style={styles.accView}>
            <Text style={styles.accText}>Họ tên: </Text>
            <Text style={styles.accPro}>{name ? name : ''}</Text>
          </View>
          <Text style={styles.accBorder} />
          <View style={styles.accView}>
            <Text style={styles.accText}>Ngày sinh: </Text>
            <Text style={styles.accPro}>{birth ? birth : ''}</Text>
          </View>
          <Text style={styles.accBorder} />
          <View style={styles.accView}>
            <Text style={styles.accText}>Số điện thoại </Text>
            <Text style={styles.accPro}>{phoneNumber ? phoneNumber : ''}</Text>
          </View>
          <Text style={styles.accBorder} />
          <View style={styles.accView}>
            <Text style={styles.accText}>Địa chỉ: </Text>
            <Text style={styles.accPro}>{address ? address : ''}</Text>
          </View>
          <Text style={styles.accBorder} />
          <View style={styles.loginBtnWrapper}>
          <LinearGradient
            colors={[COLORS.gradientForm, COLORS.primary]}
            style={styles.linearGradient}
            start={{y: 0.0, x: 0.0}}
            end={{y: 1.0, x: 0.0}}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.loginBtn}
              onPress={()=>ChangePro(dataPro)}
              >
              <Text style={styles.loginText}>Cập nhật thông tin</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  accView:{
    flexDirection:'row',
    marginVertical:10,
  },
  accBox:{
    backgroundColor:'#FFF',
    padding: 20,
    margin:10,
    borderRadius:10,
  },
  accText:{
    fontSize:18,
    fontWeight:500,
    color:'#7F98B3',
  },
  accPro:{
    fontSize:18,
    fontWeight:500,
    color:'#0a0a0a',
  },
  accBorder:{
    borderBottomWidth: 1,
    borderColor:'#F0F1F3',
    marginVertical:4,
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
  loginBtnWrapper:{
    marginVertical:20,
  },
});

export default Profile;
