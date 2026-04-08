import { TouchableOpacity, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {
  image: ImageSourcePropType;
  text: string;
  onPress?: () => void; // เพิ่ม prop สำหรับรับ function เมื่อกด (optional)
};

export default function card_function({ image, text, onPress }: Props) {
  return (
    // ส่ง onPress เข้า TouchableOpacity เพื่อให้กดได้
    <TouchableOpacity style={{ alignItems: "center" }} onPress={onPress}>
      <Image
        style={{
          width: 90,
          height: 90,
          resizeMode: "contain",
        }}
        source={image}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});