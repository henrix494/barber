import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DropDown from "../components/registerComp/DropDown";
import React, { useState } from "react";
import Icons from "react-native-vector-icons/FontAwesome5";
import OtpWOdispach from "../components/OtpWOdispach";
import searchUser from "../../utils/searchUser";
const Register = () => {
  const [iconClicked, setIconClicked] = useState({
    name: "",
    isClicked: false,
  });
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    mail: "",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState({
    isUserNameError: null,
    isLastNameError: null,
    isPhoneNumberError: null,
    isSexError: null,
    isUserExist: null,
  });

  const onIconClick = (name) => {
    setIconClicked({ name, isClicked: true });
  };

  const submitHandler = () => {
    if (userData.name.length === 0) {
      setErrors((prev) => ({ ...prev, isUserNameError: true }));
    } else {
      setErrors((prev) => ({ ...prev, isUserNameError: false }));
    }
    if (userData.lastName.length === 0) {
      setErrors((prev) => ({ ...prev, isLastNameError: true }));
    } else {
      setErrors((prev) => ({ ...prev, isLastNameError: false }));
    }
    if (userData.phoneNumber.length === 0) {
      setErrors((prev) => ({ ...prev, isPhoneNumberError: true }));
    } else {
      setErrors((prev) => ({ ...prev, isPhoneNumberError: false }));
    }

    if (iconClicked.name === "") {
      setErrors((prev) => ({ ...prev, isSexError: true }));
    } else {
      setErrors((prev) => ({ ...prev, isSexError: false }));
    }
    searchUser(userData.phoneNumber).then((res) =>
      setErrors((prev) => ({ ...prev, isUserExist: res }))
    );
    console.log(errors);
  };

  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          marginTop: 10,
          fontSize: 22,
        }}
      >
        LOGO
      </Text>
      <View
        style={{
          backgroundColor: "#191919",
          height: "100%",
          marginTop: 20,
          borderTopEndRadius: 100,
          borderTopStartRadius: 100,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          פתיחת משתמש
        </Text>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            paddingBottom: 20,
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,

              width: "80%",
            }}
          >
            <TextInput
              placeholderTextColor={"white"}
              placeholder="*שם משפחה"
              style={[
                styles.input,
                errors.isLastNameError
                  ? {
                      borderColor: "red",
                      borderWidth: 1,
                    }
                  : null,
              ]}
              onChangeText={(text) => {
                setUserData((prev) => ({ ...prev, lastName: text }));
                console.log(userData, "userData");
              }}
            />
            <TextInput
              placeholderTextColor={"white"}
              placeholder="*שם פרטי"
              style={[
                styles.input,
                errors.isUserNameError
                  ? { borderWidth: 1, borderColor: "red" }
                  : null,
              ]}
              onChangeText={(text) => {
                setUserData((prev) => ({ ...prev, name: text }));
                console.log(userData, "userData");
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholderTextColor={"white"}
              placeholder="*מספר פאלפון "
              style={[
                styles.inputFullWidth,
                errors.isPhoneNumberError
                  ? { borderWidth: 1, borderColor: "red" }
                  : null,
              ]}
              keyboardType="phone-pad"
              onChangeText={(text) => {
                setUserData((prev) => ({ ...prev, phoneNumber: text }));
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholderTextColor={"white"}
              placeholder="מייל - לא חובה"
              style={styles.inputFullWidth}
              keyboardType="phone-pad"
              onChangeText={(text) => {
                setUserData((prev) => ({ ...prev, mail: text }));
              }}
            />
          </View>

          <View style={{ flexDirection: "row", gap: 40 }}>
            <Icons
              name="male"
              size={60}
              onPress={() => onIconClick("male")}
              color={iconClicked.name === "male" ? "blue" : "black"}
            />
            <Icons
              name="female"
              size={60}
              color={iconClicked.name === "female" ? "pink" : "black"}
              onPress={() => onIconClick("female")}
            />
          </View>
          <DropDown />
        </View>

        <View
          styly={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 25,
            }}
          >
            {errors.isUserExist === true && (
              <Text style={{ color: "red", marginBottom: 10 }}>
                מספר פאלפון קיים במערכת
              </Text>
            )}
            <TouchableOpacity
              onPressIn={submitHandler}
              style={{
                color: "white",
                borderRadius: 20,
                width: "80%",
                backgroundColor: "#ffb800",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 25,
                  textAlign: "center",
                  paddingVertical: 10,
                  fontWeight: "bold",
                }}
              >
                הרשם
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {errors.isPhoneNumberError === false &&
          errors.isLastNameError === false &&
          errors.isUserNameError === false &&
          errors.isUserExist === false && (
            <View
              style={{
                position: "absolute",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top: "25%",
                right: "-8%",
                transform: [{ translateX: -50 }, { translateY: -50 }],
                backgroundColor: "black",
                width: "90%",
                height: "60%",
              }}
            >
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 5,
                  right: 10,
                }}
                onPress={() =>
                  setErrors({ ...errors, isPhoneNumberError: null })
                }
              >
                <Text style={{ color: "white", fontSize: 20 }}>X</Text>
              </TouchableOpacity>
              <OtpWOdispach
                name={userData.name}
                lastName={userData.lastName}
                phone={userData.phoneNumber}
                mail={userData.mail}
                dataOfBirth={userData.dateOfBirth}
              />
            </View>
          )}
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "black",
    width: "40%",
    height: 35,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "white",
    textAlign: "right",
  },
  inputFullWidth: {
    backgroundColor: "black",
    width: "80%",
    height: 35,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "white",
    borderRadius: 10,
    textAlign: "right",
  },
});
