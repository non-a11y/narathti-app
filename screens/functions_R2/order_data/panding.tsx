import { View, Text, ScrollView } from "react-native";
import React from "react";
import Card_order_list from "../../../src/components/card_order_list";

export default function Pending() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ rowGap: 20, paddingBottom: 20 }}
    >
      <Card_order_list />
      <Card_order_list />
     
      
    </ScrollView>
  );
}