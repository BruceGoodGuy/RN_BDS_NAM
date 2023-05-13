/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const ProductDetail = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#FFF', flex:1}}>
      <ScrollView>
        <View style={styles.productImage}>
            <Image style={styles.productImg} source={require('../../assets/anh1.jpg')} />
        </View>
        <Text style={styles.productBottom} />
        <View style={styles.detailBox}>
            <Text style={styles.detailName}>Tên sản phẩm</Text>
            <Text style={styles.detailContent}>Chi tiêt:
            <Text style={styles.detailCont}> Phân tích đất là một thành phần thiết yếu của quản lý tài nguyên đất và canh tác cây trồng. Mỗi
mẫu được lấy phải đại diện thực sự của khu vực được lấy mẫu. Sự hữu ích của các kết quả thu
được từ phân tích trong phòng thí nghiệm phụ thuộc vào độ chính xác lấy mẫu. Do đó, nên thu
thập số lượng lớn mẫu để có thể thu được cỡ mẫu mong muốn bằng cách lấy trên nhiều điểm/vị
trí. Nói chung, việc lấy mẫu đất được thực hiện với tỷ lệ một mẫu đất đại diện cho diện tích từ 1 –
2 ha. Tuy nhiên, có thể thu thập ít nhất một mẫu đất cho diện tích tối đa là 3 - 5 ha. Đối với công
việc khảo sát lấy mẫu đất, các mẫu phải được thu thập đại diện của tầng đất và khu vực/cánh
đồng lấy mẫu.</Text>
            </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  productImage:{
    borderColor:'#DEE8F2',
    alignItems:'center',
    marginVertical:20,
  },
  productImg:{
    width:300,
    height:200,
    borderRadius:20,
  },
  productBottom:{
    borderBottomWidth:8,
    borderColor:'#F6F7F9',
  },
  detailName:{
    fontSize:24,
    fontWeight:600,
    color:'#000000',
  },
  detailBox:{
    margin:15,
  },
  detailContent:{
    fontSize:20,
    fontWeight:500,
    color:'#000000',
    marginTop:5
  },
  detailCont:{
    fontSize:16,
    fontWeight:400,
    color:'#000000',
  },
});
