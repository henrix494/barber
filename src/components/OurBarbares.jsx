import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
const OurBarbares = () => {
  const isCalendar = useSelector((state) => state.calendar.value);
  if (isCalendar) return null;
  else {
    content;
  }
  const content = (
    <View style={{ paddingHorizontal: 35, marginTop: 25 }}>
      <Text
        style={{
          color: "white",
          fontSize: 35,
          fontWeight: "bold",
        }}
      >
        הספרים שלנו
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: 20,
        }}
      >
        <Image
          style={{ borderRadius: 200, width: 120, height: 120, marginTop: 25 }}
          source={require("../../assets/profilePicOne.jpeg")}
        />
        <Image
          style={{ borderRadius: 200, width: 120, height: 120, marginTop: 25 }}
          source={require("../../assets/profilePicOne.jpeg")}
        />
        <Image
          style={{ borderRadius: 200, width: 120, height: 120, marginTop: 25 }}
          source={require("../../assets/profilePicOne.jpeg")}
        />
        <Image
          style={{ borderRadius: 200, width: 120, height: 120, marginTop: 25 }}
          source={require("../../assets/profilePicOne.jpeg")}
        />
      </View>
    </View>
  );
  return content;
};

export default OurBarbares;
