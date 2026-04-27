import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../../styles/mystyles'

// คำนวณความกว้าง: (จอทั้งหมด - padding สองข้าง - gap ตรงกลาง) / 2
const cardWidth = (Dimensions.get('window').width - 64) / 2; 

export default function Card_picture({ item }: any) {
  return (
    <TouchableOpacity 
    activeOpacity={0.8} 
    style={{ width: cardWidth, alignItems: 'center' }}>
      <ImageBackground
        source={require("../../../../assets/icon/S1/picture.png")}
        resizeMode="cover"
        style={[
          globalStyles.ios,
          globalStyles.android,
          {
            height: 120, // กำหนดความสูงให้แน่นอน
            width: '90%',
            backgroundColor: "#ffffff",
            borderRadius: 20,
          },
        ]}
        imageStyle={{ borderRadius: 20 }}
      >
        {/* ป้ายด้านบนขวา (เช่น รหัสห้อง) */}
        <View
          style={{
            alignSelf: "flex-end",
            backgroundColor: "#00000085",
            paddingVertical: 4,
            paddingHorizontal: 12,
            borderBottomLeftRadius: 15,
            borderTopRightRadius: 20,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 10, fontWeight: "bold" }}>
            MA-1
          </Text>
        </View>

        {/* ส่วนชื่อด้านล่าง */}
        <View style={{ flex: 1 }} />
        {/* ใช้ View เปล่าดันเนื้อหาลงล่าง */}
        
        <View
          style={{
            backgroundColor: "#0000005c",
            paddingLeft: 10,
            paddingVertical: 8,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "bold",
              textTransform: 'capitalize' // ทำให้ตัวแรกเป็นตัวพิมพ์ใหญ่
            }}
          >
            {item?.text || "No Title"}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}