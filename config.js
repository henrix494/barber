import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

export const firebaseConfig = {
  apiKey: "AIzaSyALrfZVV8aIJk6nJlfQDmeiOS3SmVi6fjQ",
  authDomain: "phoneouth-da3ce.firebaseapp.com",
  projectId: "phoneouth-da3ce",
  storageBucket: "phoneouth-da3ce.appspot.com",
  messagingSenderId: "259960104873",
  appId: "1:259960104873:web:4f9d760d22976057e586b8",
  measurementId: "G-ZZH4FW0Y6W",
};
if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);
  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  firebase.app(); // if already initialized, use that one
}
