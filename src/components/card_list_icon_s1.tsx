import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export type Card_list_s1Props = {
  title: string;

} 

export default function card_list_icon_s1({ title }: Card_list_s1Props) {
  return (
    <TouchableOpacity
          activeOpacity={0.85}
          style={{
            backgroundColor: "#ffffffff",
            width: "90%",
            borderRadius: 30,
            height: 50,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            // เส้นขอบ
            borderWidth: 2,
            borderColor: "#78bef8ff",
          }}
        >
          {/* reception — อยู่กลางจริงๆ โดยใช้ position absolute */}
          <Text
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
              color: "#000000ff",
            }}
          >
            {title}
          </Text>
    
          {/* icon */}
         <MaterialIcons style = {{marginLeft: "auto"}} name="remove-red-eye" size={24} color="#3314ffff" />
        </TouchableOpacity>
  )
}