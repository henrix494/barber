import firestore from "@react-native-firebase/firestore";

const searchUserData = async (phoneNumber) => {
  try {
    const db = await firestore();
    const docRef = db.collection("users").doc(phoneNumber);
    const doc = await docRef.get();

    if (doc.exists) {
      const userData = doc.data();
      return userData;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export default searchUserData;
