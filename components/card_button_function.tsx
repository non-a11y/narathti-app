import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles, button_function} from '../styles/mystyles'
import { Ionicons } from '@expo/vector-icons'

interface card_setProps {
    text: string;
    value: string;
    onPress?: () => void;
}

export default function card_button_function({text, value, onPress}: card_setProps) {
  return (
    <TouchableOpacity
            onPress={onPress}
            style={[
                //globalStyles.ios, 
                //globalStyles.android, 
                button_function.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            {/* Text left */}
            <Text style={button_function.text_left}>{text}</Text>
            {/* Text right */}
            <View style={button_function.box_right}>
              <Text style={button_function.text_right}>{value}</Text>
              <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
            </View>
          </TouchableOpacity>
  )}