import React, { useState, useRef, useEffect } from "react";
import { Button, TextInput, View, Text } from "react-native";
import { setIsSignIn, setName } from "../features/signInSlice";
import { useDispatch } from "react-redux";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import searchUser from "../../utils/searchUser";
import searchUserData from "../../utils/getUserData";
import firebase from "firebase/compat/app";
import firebaseConfig from "../../utils/fireBaseconfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = getAuth();

export default function Opt() {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState(` `);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(true); // Declare recaptchaReady state here
  const recaptchaVerifier = useRef(null);
  const [error, setError] = useState(null);
  const [isUserExist, setIsUserExist] = useState(null);
  searchUser(phoneNumber.slice(5)).then((res) => setIsUserExist(res));
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
    if (phoneNumber <= 10 || null) {
      setError("הכנס מספר פלאפון");
    } else if (!isUserExist) {
      setError("משתמש  לא קיים במערכת");
    } else {
      setError(null);
      if (recaptchaReady) {
        const phoneProvider = new PhoneAuthProvider(auth);
        try {
          const verificationId = await phoneProvider.verifyPhoneNumber(
            phoneNumber,
            recaptchaVerifier.current
          );
          setVerificationId(verificationId);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("Recaptcha verifier is not ready");
      }
    }
  };

  const confirmCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      dispatch(setIsSignIn(true));
      await searchUserData(phoneNumber.slice(5)).then((data) => {
        dispatch(setName(data.name));
      });
    } catch (error) {
      console.error(error);
    }
  };
  const phoneNumberHandler = (phoneNumber1) => {
    setPhoneNumber(`+972 ${phoneNumber1}`);
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
        value={phoneNumber.slice(5)}
        placeholderTextColor={"white"}
        style={{ color: "white", textAlign: "right" }}
      />
      <Button title="שלח קוד" onPress={sendVerification} />
      {error && (
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      )}
      <TextInput
        placeholder="Verification Code"
        onChangeText={setVerificationCode}
        value={verificationCode}
        style={{ color: "white" }}
      />
      <Button title="Confirm Code" onPress={confirmCode} />
    </View>
  );
}
// +9720538237061;
