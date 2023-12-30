import React, { useState, useRef, useEffect } from "react";
import { Button, TextInput, View, Text } from "react-native";
import testdata from "../../utils/postUserData";
import searchUser from "../../utils/searchUser";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import { useDispatch } from "react-redux";
import { setIsSignIn, setName } from "../features/signInSlice";
import searchUserData from "../../utils/getUserData";
import firebaseConfig from "../../utils/fireBaseconfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = getAuth();

export default function OtpWOdispach({ name, lastName, phone, mail }) {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState(` `);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(true); // Declare recaptchaReady state here
  const recaptchaVerifier = useRef(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, dispatch an action to update your application state
        dispatch(setIsSignIn(true));
      } else {
        // User is signed out, dispatch an action to update your application state
        dispatch(setIsSignIn(false));
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);
  const sendVerification = async () => {
    setError(null);
    if (recaptchaReady) {
      const phoneProvider = new PhoneAuthProvider(auth);
      try {
        const verificationId = await phoneProvider.verifyPhoneNumber(
          `+972 ${phone}`,
          recaptchaVerifier.current
        );
        setVerificationId(verificationId);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Recaptcha verifier is not ready");
    }
  };
  //0538237061
  const confirmCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      await testdata(name, lastName, phone);
      await searchUserData(phone).then((data) => {
        dispatch(setName(data.name));
      });
      dispatch(setIsSignIn(true));
      navigation.navigate("Main");
    } catch (error) {
      console.error(error);
    }
  };
  const phoneNumberHandler = (phoneNumber1) => {
    setPhoneNumber(`+972 ${phone}`);
  };
  return (
    <View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        onLoad={() => {
          console.log("Recaptcha loaded");
          setRecaptchaReady(true);
        }}
        onError={(error) => {
          console.error("Recaptcha error:", error);
          setRecaptchaReady(false);
        }}
      />

      <TextInput
        placeholder=" מספר פאלפון"
        onChangeText={(phoneNumber) => phoneNumberHandler(phoneNumber)}
        keyboardType="phone-pad"
        value={phone}
        placeholderTextColor={"white"}
        style={{
          color: "white",
          textAlign: "right",
          borderColor: "white",
          borderWidth: 1,
          marginBottom: 20,
          borderRadius: 10,
          padding: 5,
        }}
      />
      <Button title="שלח קוד" onPress={sendVerification} />
      {error && (
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      )}
      <TextInput
        placeholder="Verification Code"
        onChangeText={setVerificationCode}
        value={verificationCode}
        style={{
          color: "white",
          textAlign: "right",
          borderColor: "white",
          borderWidth: 1,
          marginBottom: 10,
          borderRadius: 10,
          padding: 5,
        }}
      />
      <Button
        title="Confirm Code"
        onPress={confirmCode}
        style={{ marginBottom: 10 }}
      />
    </View>
  );
}
