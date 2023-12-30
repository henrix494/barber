import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Opt from "./Otp";
import { useSelector, useDispatch } from "react-redux";
import { toggleModel } from "../features/modelSlice";
const SignModel = () => {
  const isModel = useSelector((state) => state.model.isModel);
  const dispatch = useDispatch();
  const closeModel = () => {
    dispatch(toggleModel(false));
  };
  return (
    <>
      {isModel && (
        <View
          style={{
            backgroundColor: "black",
            position: "fixed",
            bottom: "50%",
            transform: [{ translateY: -100 }],
            height: 300,
            zIndex: 100,
            left: "5%",
            width: "90%",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={closeModel}
            style={{
              backgroundColor: "#ffb800",
              marginBottom: 30,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                padding: 2,
                textAlign: "center",
                fontSize: 22,
              }}
            >
              סגור
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: "100%",
            }}
          >
            <Opt />
          </View>
        </View>
      )}
    </>
  );
};

export default SignModel;
