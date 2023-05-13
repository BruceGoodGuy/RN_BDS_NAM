/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TextInput, SafeAreaView,TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import { COLORS, ROUTES } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity hitSlop={10} onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/icons/goBack.png')} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            {/* <Logo width={55} height={55} style={styles.mr7} /> */}
            <Text style={styles.brandName}>Quên Mật Khẩu</Text>
          </View>
          <Text style={styles.footerText}>Email</Text>
          <TextInput style={styles.input} placeholder="Email" />
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
                <Text style={styles.loginText}>Xác Nhận</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

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
});
