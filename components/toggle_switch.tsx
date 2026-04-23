import { TouchableWithoutFeedback, Animated } from "react-native";
import React, { useRef, useState } from "react";

// ─── ค่าคงที่กำหนดขนาดของ Toggle ───────────────────────────────────────────
const TRACK_WIDTH = 56;  // ความกว้างของแถบ track
const TRACK_HEIGHT = 32; // ความสูงของแถบ track
const THUMB_SIZE = 26;   // ขนาดเส้นผ่านศูนย์กลางของลูกกลม (thumb)
const THUMB_MARGIN = (TRACK_HEIGHT - THUMB_SIZE) / 2; // ระยะห่างจากขอบบน-ล่างของ thumb
const THUMB_ON_X = TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN; // ตำแหน่ง X ของ thumb ตอน ON (ชิดขวา)

// ─── Props ─────────────────────────────────────────────────────────────────
interface ToggleSwitchProps {
  value?: boolean;                    // ค่าเริ่มต้น ON/OFF (optional, default = false)
  onValueChange?: (val: boolean) => void; // callback เมื่อค่าเปลี่ยน (optional)
}

export default function Toggle_switch({
  value = false,
  onValueChange,
}: ToggleSwitchProps) {
  // ─── State ────────────────────────────────────────────────────────────────
  const [isOn, setIsOn] = useState(value); // เก็บสถานะ ON/OFF ปัจจุบัน

  // ─── Animated Values ──────────────────────────────────────────────────────
  const thumbX = useRef(
    new Animated.Value(value ? THUMB_ON_X : THUMB_MARGIN) // เริ่มต้นตาม value ที่รับมา
  ).current;
  const trackColor = useRef(
    new Animated.Value(value ? 1 : 0) // 0 = เทา (OFF), 1 = เขียว (ON)
  ).current;

  // ─── ฟังก์ชัน toggle: เรียกเมื่อผู้ใช้กด ────────────────────────────────
  const toggle = () => {
    const next = !isOn; // สลับสถานะ
    setIsOn(next);
    onValueChange?.(next); // ส่งค่ากลับไปให้ parent (ถ้ามี)

    // รัน animation สองตัวพร้อมกัน
    Animated.parallel([
      // 1) เลื่อน thumb ซ้าย ↔ ขวา ด้วย spring (มีความยืดหยุ่นเล็กน้อย)
      Animated.spring(thumbX, {
        toValue: next ? THUMB_ON_X : THUMB_MARGIN, // ON → ขวา, OFF → ซ้าย
        useNativeDriver: false, // ต้องเป็น false เพราะ animate ค่า layout (left)
        speed: 20,
        bounciness: 6, // ความกระเด้งของ spring
      }),
      // 2) เปลี่ยนสี track จากเทา → เขียว (หรือกลับกัน)
      Animated.timing(trackColor, {
        toValue: next ? 1 : 0,
        duration: 200, // ใช้เวลา 200ms
        useNativeDriver: false, // ต้องเป็น false เพราะ animate backgroundColor
      }),
    ]).start();
  };

  // ─── แปลงค่า trackColor (0–1) → สีพื้นหลัง track ────────────────────────
  const bgColor = trackColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#D1D1D6", "#34C759"], // 0 = เทา (OFF), 1 = เขียว iOS (ON)
  });

  return (
    // ครอบด้วย TouchableWithoutFeedback เพื่อรับการกด
    <TouchableWithoutFeedback onPress={toggle}>

      {/* แถบ track — สีเปลี่ยนตาม bgColor */}
      <Animated.View
        style={{
          width: TRACK_WIDTH,
          height: TRACK_HEIGHT,
          borderRadius: TRACK_HEIGHT / 2, // ทำให้โค้งมนเป็น pill shape
          backgroundColor: bgColor,
          justifyContent: "center",
        }}
      >
        {/* ลูกกลม thumb — เลื่อนซ้าย/ขวาตาม thumbX */}
        <Animated.View
          style={{
            width: THUMB_SIZE,
            height: THUMB_SIZE,
            borderRadius: THUMB_SIZE / 2, // ทำให้กลม
            backgroundColor: "#FFFFFF",   // thumb สีขาวเสมอ
            position: "absolute",
            left: thumbX,                 // ตำแหน่งแนวนอนที่ถูก animate
            // Shadow สำหรับ iOS
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.25,
            shadowRadius: 3,
            // Shadow สำหรับ Android
            elevation: 3,
          }}
        />
      </Animated.View>

    </TouchableWithoutFeedback>
  );
}
