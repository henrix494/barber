import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Person from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { signOut, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIsSignIn, setName } from "../features/signInSlice";
import { toggleModel } from "../features/modelSlice";
import { useNavigation } from "@react-navigation/native";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { isSignedIn } = useSelector((state) => state.signIn);
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: 20,
      paddingHorizontal: 30,
      justifyContent: "space-between",
      zIndex: 10,
      alignItems: "center",
    },
    title: {
      color: "#ffb800",
      fontSize: 20,
      zIndex: 5,
    },
  });
  const auth = getAuth();
  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    dispatch(setIsSignIn(false));
    dispatch(setName(null));
  };
  const onSignInPress = () => {
    dispatch(toggleModel(true));
  };
  return (
    <>
      <View style={{ backgroundColor: "#191919" }}>
        <View style={[styles.container]}>
          <Icon name="menu" size={30} color="#ffb800" style={{ zIndex: 5 }} />
          <Text style={{ color: "#ffb800", fontSize: 20, zIndex: 5 }}>
            Logo
          </Text>

          <Person
            style={{ zIndex: 5 }}
            name="person-circle-outline"
            size={40}
            color="#ffb800"
          />
          <TouchableOpacity onPress={onSignOut}>
            <Text style={{ color: "white" }}>יציאה</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log(
                auth.currentUser?.phoneNumber,
                "auth.currentUser.uid"
              );
            }}
          >
            <Text style={{ color: "white" }}>בדיקה</Text>
          </TouchableOpacity>
        </View>
        {!isSignedIn && (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>
              התחבר או הרשם בישביל להזמין תור
            </Text>

            <View style={{ flexDirection: "row-reverse", columnGap: 20 }}>
              <TouchableOpacity onPress={onSignInPress}>
                <Text style={{ color: "white" }}>התחבר</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text style={{ color: "white" }}>הרשם</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Navbar;
