import { View, Text, StyleSheet, Button, I18nManager } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Person from "react-native-vector-icons/Ionicons";
import SvgComponentSCR from "../../assets/scissors-f-svgrepo-com";
import SvgComponentSCR from "../../assets/scissors-f-svgrepo-com";
const Navbar = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: 20,
      paddingHorizontal: 30,
      justifyContent: "space-between",
      zIndex: 5,
      alignItems: "center",
    },
    title: {
      color: "#ffb800",
      fontSize: 20,
      zIndex: 5,
    },
  });
  return (
    <>
      <View style={{ position: "relative" }}>
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
        </View>
        <View
          style={{
            zIndex: 10,
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
            <Text
              style={{
                color: "#ffb800",
                fontSize: 40,
                fontWeight: "700",
                zIndex: 5,
              }}
            >
              נתן
            </Text>
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: "-100%",
            zIndex: -1,
            [I18nManager.isRTL ? "right" : "left"]: "15%",
            transform: [{ rotate: "250deg" }],
          }}
        >
          <SvgComponentSCR width={50} />
        </View>
      </View>
    </>
  );
};

export default Navbar;
