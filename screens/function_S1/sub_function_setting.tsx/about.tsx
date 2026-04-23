import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/mystyles'
import Header_sub_functions from '../../../components/header_sub_functions'

export default function about() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
          />
    
          {/* Blue Gradient Header */}
          <Header_sub_functions title="About" />
    
          {/* White Settings Card */}
          <View
            style={{
              flex: 1,
              marginTop: -20,
              paddingHorizontal: 16,
            }}
          >
            <View
              style={[
                globalStyles.ios,
                globalStyles.android,
                {
                   minHeight: 200,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              paddingHorizontal: 16,
              paddingVertical: 16,
              alignItems: "center",
              shadowColor: "#5e76ffff",
              rowGap: 10,
                },
              ]}
            >
              
            </View>
          </View>
        </View>
  )
}