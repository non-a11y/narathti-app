// TasksScreen.tsx
// หน้า Tasks — มีปุ่มกดเพื่อ navigate ไปหน้า MultiPointDelivery

import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

// กำหนด type ให้ navigation object
// บอกว่าเราอยู่ที่หน้า "Tasks" และสามารถ navigate ไปหน้าไหนได้บ้าง
type TasksNavProp = NativeStackNavigationProp<RootStackParamList, 'Tasks'>

export default function TasksScreen() {
  // useNavigation() — ดึง navigation object มาใช้
  // ใช้ได้เลยโดยไม่ต้อง pass props ลงมา เพราะ NavigationContainer สร้าง context ไว้ให้
  const navigation = useNavigation<TasksNavProp>()

  const handleGoToDelivery = () => {
    // navigate() — สั่งให้ไปหน้า MultiPointDelivery
    // พร้อมส่ง params ไปด้วย (orderId และ items)
    // TypeScript จะแจ้งเตือนถ้าส่ง params ผิด type หรือขาด field
    navigation.navigate('MultiPointDelivery', {
      orderId: 'ORD-001',
      items: ['ปลายทาง A', 'ปลายทาง B', 'ปลายทาง C'],
    })
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>รายการงาน</Text>

      {/* กดปุ่มแล้วเรียก handleGoToDelivery เพื่อ navigate */}
      <Button
        title="ไปหน้า Multi Point Delivery"
        onPress={handleGoToDelivery}
      />
    </View>
  )
}