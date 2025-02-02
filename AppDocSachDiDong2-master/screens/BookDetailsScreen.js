import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function BookDetailsScreen({ navigation, route }) {
  const params = route.params;
  const { item } = params;
  const onGoBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ position: "relative" }}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{ uri: item.image }}
        />
        <TouchableOpacity
          onPress={onGoBack}
          style={{
            backgroundColor: "#ffffff60",
            position: "absolute",
            top: 30,
            left: 12,
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        ></TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.name}</Text>
        <Text
          style={{
            color: "#000",
            fontSize: 12,
            fontWeight: "bold",
            marginTop: 24,
          }}
        >
          MÔ TẢ
        </Text>
        <Text
          style={{
            color: "gray",
          }}
        >
          {item.description}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View>
            <View
              style={{
                backgroundColor: "#f4f4f4",
                borderRadius: 100,
                paddingHorizontal: 8,
              }}
            ></View>
          </View>
          <View style={{ flex: 1 }} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}></View>
      </View>
    </ScrollView>
  );
}
