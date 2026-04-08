import { TouchableOpacity, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {
  image: ImageSourcePropType;
  text: string;
};

export default function card_function({ image, text }: Props) {
  return (
    <TouchableOpacity style={{ alignItems: "center" }}>
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