import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles, reception_R2 } from '../../../styles/mystyles'
import { Ionicons } from '@expo/vector-icons'

interface card_reProps {
    text: string;
    value: string;
}

export default function card_re({text, value}: card_reProps) {
  return (
   <TouchableOpacity
            style={[globalStyles.ios, globalStyles.android, reception_R2.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            {/* Text left */}
            <Text style={reception_R2.rowLabel}>{text}</Text>
            {/* Text right */}
            <View style={reception_R2.rowRight}>
              <Text style={reception_R2.rowValue}>{value}</Text>
              <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
            </View>
          </TouchableOpacity>
  )
}