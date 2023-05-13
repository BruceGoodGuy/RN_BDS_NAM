/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, ScrollView, View, Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, ROUTES } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const Account = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.img}>
          <Image style={styles.tinyLogo} source={require('../../assets/user.jpg')} />
        </View>
        <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate(ROUTES.PROFILE)}>
          <Text style={styles.text}>Thông tin</Text>
          <Image style={styles.icon} source={require('../../assets/icons/icon-cret.png')} />
        </TouchableOpacity >
        <TouchableOpacity  style={styles.button} onPress={() =>navigation.navigate(ROUTES.CHANGEPASS)}>
          <Text style={styles.text}>Đổi mật khẩu</Text>
          <Image style={styles.icon} source={require('../../assets/icons/icon-cret.png')} />
        </TouchableOpacity >
        <TouchableOpacity  style={styles.button}>
          <Text style={styles.text}>Về chúng tôi</Text>
          <Image style={styles.icon} source={require('../../assets/icons/icon-cret.png')} />
        </TouchableOpacity >
        <View style={styles.loginBtnWrapper}>
          <LinearGradient
            colors={[COLORS.gradientForm, COLORS.primary]}
            style={styles.linearGradient}
            start={{y: 0.0, x: 0.0}}
            end={{y: 1.0, x: 0.0}}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.LOGIN)}
              activeOpacity={0.7}
              style={styles.loginBtn}>
              <Text style={styles.loginText}>Đăng Xuất</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  main:{
    flex:1,
    paddingHorizontal:15,
  },
  container: {
    paddingTop: 50,
  },
  img:{
    alignItems: 'center',
    marginTop:20,
    backgroundColor:'#FFFFFF',
    paddingVertical: 20,
    marginBottom:10,
    borderRadius:8,
  },
  tinyLogo: {
    width: 90,
    height: 90,
    borderRadius:20,
  },
  button:{
    marginVertical:8,
    backgroundColor:'#FFFFFF',
    paddingVertical: 20,
    flexDirection:'row',
    borderRadius:8,
    alignItems:'center',
  },
  text:{
    color:'#000000',
    fontSize: 14,
    fontWeight: 500,
    marginHorizontal:10,
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
  icon:{
    position:'absolute',
    right:10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});


