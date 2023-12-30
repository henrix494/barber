import firestore from "@react-native-firebase/firestore";

const testdata = async (name, lastName, phoneNumber) => {
  try {
    console.log(name, lastName);
    const db = await firestore();
    const data = {
      name: name,
      lastName: lastName,
      phoneNumber: phoneNumber,
    };
    const res = await db.collection("users").doc(phoneNumber).set(data);
    console.log(`this is the res ${res}`);
  } catch (error) {
    console.log(error);
  }
};

export default testdata;
