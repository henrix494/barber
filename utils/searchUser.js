import firestore from "@react-native-firebase/firestore";

const searchUser = async (phoneNumber) => {
  try {
    const db = await firestore();
    const docRef = db.collection("users").doc(phoneNumber);
    const doc = await docRef.get();

    if (doc.exists) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export default searchUser;
