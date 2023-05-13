/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AutoScroll from '@homielab/react-native-auto-scroll';
import {HomeStyle} from './Home.style';

const Home = () => {
  return (
    <SafeAreaView style={{...HomeStyle.main}}>
      <LinearGradient
        colors={['#FFFFFF', '#EFF1F2', '#EFF1F2']}
        style={{...HomeStyle.linearGradient}}
        start={{y: 0.0, x: 0.0}}
        end={{y: 1.0, x: 0.0}}>
        <View style={{...HomeStyle.homeHeader}}>
          <Text style={{...HomeStyle.homeTitle}}>Diamond Tree</Text>
        </View>
        <ScrollView style={{flex: 1, padding: 20}} showsVerticalScrollIndicator={false}>
          <View style={{...HomeStyle.img}}>
            <Image
              style={{...HomeStyle.tinyLogo}}
              source={require('../../assets/user.jpg')}
            />
            <View style={{...HomeStyle.homeView}}>
              <Text style={{...HomeStyle.homeText}}>Xin chào!</Text>
              <Text style={{...HomeStyle.homeName}}>Đăng Chánh</Text>
            </View>
            <TouchableOpacity style={{...HomeStyle.homeClick}}>
              <Image
                style={{...HomeStyle.homeDate}}
                source={require('../../assets/icons/diamond.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{...HomeStyle.homePoint}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...HomeStyle.homeDia}}>Diamond: </Text>
              <Text style={{...HomeStyle.homeNumber}}>10000</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...HomeStyle.homeDia}}>Điểm: </Text>
              <Text style={{...HomeStyle.homeNumber}}>10000000</Text>
            </View>
          </View>
          <View style={{marginVertical:20}}>
            <Image
              source={require('../../assets/banner-bds.png')}
            />
          </View>
          <AutoScroll style={{marginBottom: 15}} endPadding={50}>
            <Text style={{...HomeStyle.autoText}}>
              Hôm nay là một ngày tuyệt vời!
            </Text>
          </AutoScroll>
          <View style={{...HomeStyle.aboutHome.aboutH}}>
              <TouchableOpacity style={{...HomeStyle.aboutHome.about}}>
                <Image style={{...HomeStyle.aboutHome.img}}
                  source={require('../../assets/icons/about.png')}
                />
                <Text style={{...HomeStyle.aboutHome.text, color:'#094B8F'}}>Giới Thiệu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{...HomeStyle.aboutHome.news}}>
                <Image
                  source={require('../../assets/icons/news.png')}
                />
                <Text style={{...HomeStyle.aboutHome.text, color:'#E95035'}}>Tin Tức</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{...HomeStyle.aboutHome.contact}}
              onPress={()=>{Linking.openURL('tel:0123456789');}}
              >
                <Image style={{...HomeStyle.aboutHome.img}}
                  source={require('../../assets/icons/contact.png')}
                />
                <Text style={{...HomeStyle.aboutHome.text, color:'#289234'}}>Liên Hệ</Text>
              </TouchableOpacity>
          </View>
          <View style={{...HomeStyle.homeImage}}>
            <Image
              style={{...HomeStyle.icon}}
              source={require('../../assets/anh1.jpg')}
            />
            </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default Home;
