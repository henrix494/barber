import React from "react";
import { View, Text, I18nManager } from "react-native";
import SvgComponentSCR from "../../assets/scissors-f-svgrepo-com";
import { useSelector } from "react-redux";
const User = () => {
  const { isSignedIn } = useSelector((state) => state.signIn);
  const { name } = useSelector((state) => state.signIn);
  return (
    <View style={{ position: "relative" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 20,
          paddingRight: 30,

          paddingBottom: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            borderBottomWidth: 1,
            borderBottomColor: "#665A3D",
            width: "95%",
            paddingBottom: 18,
          }}
        >
          ברוך הבא ,{"\n"}
          {isSignedIn ? (
            <Text
              style={{
                color: "#ffb800",
                fontSize: 40,
                fontWeight: "700",
                zIndex: 5,
                textAlign: "right",
              }}
            >
              {name}
            </Text>
          ) : (
            <Text
              style={{
                color: "#ffb800",
                fontSize: 40,
                fontWeight: "700",
                zIndex: 5,
              }}
            >
              אורח
            </Text>
          )}
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          top: -310,

          zIndex: 1,
          [I18nManager.isRTL ? "right" : "left"]: "15%",
          transform: [{ rotate: "250deg" }],
        }}
      >
        <SvgComponentSCR width={50} />
      </View>
    </View>
  );
};

export default User;
