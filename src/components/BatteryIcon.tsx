import React from "react";
import { Image, ImageStyle, StyleProp } from "react-native";

interface BatteryIconProps {
  battery: number | string;
  taskStatus?: string;
  style?: StyleProp<ImageStyle>;
}

const BatteryIcon: React.FC<BatteryIconProps> = ({ battery, taskStatus, style }) => {
  // แปลงค่า battery ให้เป็นตัวเลข (รองรับทั้ง "80%" หรือ 80)
  const getBatteryValue = () => {
    if (typeof battery === "string") {
      return Number(battery.replace("%", ""));
    }
    return battery;
  };

  const batteryValue = getBatteryValue();

  const getIconSource = () => {
    if (taskStatus === "CHARGE") {
      return require("../../assets/icon/battery/CHARGE.webp");
    }
    
    if (batteryValue <= 25) {
      return require("../../assets/icon/battery/0-25.webp");
    } else if (batteryValue <= 50) {
      return require("../../assets/icon/battery/25-50.webp");
    } else if (batteryValue <= 75) {
      return require("../../assets/icon/battery/50-75.webp");
    } else {
      return require("../../assets/icon/battery/75-100.webp");
    }
  };

  return (
    <Image
      style={[
        {
          width: 20,
          aspectRatio: 2 / 3,
          resizeMode: "contain",
          // ปรับภาพให้เป็นแนวนอนโดยเริ่มต้น (หากต้องการเปลี่ยนสามารถส่ง style มาทับได้)
          transform: [{ rotate: "90deg" }],
        },
        style,
      ]}
      source={getIconSource()}
    />
  );
};

export default BatteryIcon;
