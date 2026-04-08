// MultiPointDelivery.tsx
// หน้าปลายทาง — รับ params ที่ส่งมาจากหน้า Tasks แล้วนำมาแสดงผล

import { View, Text, FlatList } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../App'

// กำหนด type ให้ route object
// บอกว่าหน้านี้ชื่อ "MultiPointDelivery" และ params มีหน้าตาแบบไหน
type MultiPointRoute = RouteProp<RootStackParamList, 'MultiPointDelivery'>

export default function MultiPointDelivery() {
  // useRoute() — ดึง route object ของหน้าปัจจุบัน
  // ภายในมี .params ที่เก็บข้อมูลที่หน้า Tasks ส่งมา
  const route = useRoute<MultiPointRoute>()

  // แกะ params ออกมาใช้งาน
  // orderId และ items มาจาก navigation.navigate() ของหน้า Tasks
  const { orderId, items } = route.params

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {/* แสดง orderId ที่รับมา */}
      <Text style={{ fontSize: 22, marginBottom: 8 }}>
        หมายเลขออเดอร์: {orderId}
      </Text>

      <Text style={{ marginBottom: 16, color: '#666' }}>ปลายทางทั้งหมด</Text>

      {/* FlatList — แสดง items ที่รับมาเป็น list */}
      {/* ใช้ FlatList แทน map() เพราะรองรับรายการยาวๆ ได้ดีกว่า */}
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()} // key ต้องเป็น string
        renderItem={({ item, index }) => (
          <Text style={{ padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
            {index + 1}. {item}
          </Text>
        )}
      />
    </View>
  )
}