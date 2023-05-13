/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';

const Product = () => {
  const navigation = useNavigation();
  const productDe = () => {
    navigation.navigate('ProductDetail');
  }
  return (
    <SafeAreaView style={{backgroundColor:'#FFF', flex:1}}>
      <ScrollView>
        <View style={styles.productRow}>
          <View style={styles.productImage}>
            <TouchableOpacity style={styles.productBox} onPress={() => productDe()}>
              <Image style={styles.productImg} source={require('../../assets/anh1.jpg')} />
              <Text style={styles.productText}>Sản phẩm 1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productImage}>
            <TouchableOpacity style={styles.productBox} onPress={() => productDe()}>
              <Image style={styles.productImg} source={require('../../assets/anh2.jpg')} />
              <Text style={styles.productText}>Sản phẩm 2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productImage}>
            <TouchableOpacity style={styles.productBox} onPress={() => productDe()}>
              <Image style={styles.productImg} source={require('../../assets/anh3.png')} />
              <Text style={styles.productText}>Sản phẩm 3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productImage}>
            <TouchableOpacity style={styles.productBox} onPress={() => productDe()}>
              <Image style={styles.productImg} source={require('../../assets/anh1.jpg')} />
              <Text style={styles.productText}>Sản phẩm 4</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  productRow:{
    flexWrap:'wrap',
    flexDirection:'row',
  },
  productImage:{
    margin: 10,
    width:'43%',
    borderWidth:1,
    borderRadius:8,
    borderColor:'#DEE8F2',
    alignItems:'center',

  },
  productText:{
    color:'#000000',
    fontSize: 16,
    fontWeight: 600,
    marginVertical:15,
    textAlign:'center',
  },
  productImg:{
    width:120,
    height:120,
    borderRadius:20,
  },
  productBox:{
    padding:20,
  }
});
