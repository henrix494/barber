import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";

import SvgComponent from "../../assets/razor-straight";
import { useDispatch, useSelector } from "react-redux";
import { setService } from "../features/serviceSlice";
import { setCalendar } from "../features/calendarSlice";
import BookingPros from "./BookingPros";
export default function Services() {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service.value);
  const isCalendar = useSelector((state) => state.calendar.value);
  const isSignedIn = useSelector((state) => state.signIn.isSignedIn);
  const styles = StyleSheet.create({
    container: {
      width: "30%",
      flexDirection: "col",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    textBlock: {
      color: "#ffb800",
      marginTop: 5,
      fontSize: 18,
      fontWeight: "bold",
    },
    imgContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 35,
      justifyContent: "center",
      alignItems: "center",
    },
    imgEle: {
      backgroundColor: "#232323",
      width: "45%",
      alignItems: "center",
      borderRadius: 10,
      flexDirection: "column",
    },
  });
  const onBackPress = () => {
    dispatch(setService(null));
    dispatch(setCalendar(false));
  };
  const onServicePress = (innerText) => {
    dispatch(setService(innerText));
  };
  const onBoockingPress = () => {
    if (isSignedIn) {
      if (service) {
        dispatch(setCalendar(true));
      } else {
        Alert.alert("בחר שירות");
      }
    } else {
      Alert.alert("התחבר למערכת");
    }
  };
  return (
    <>
      {isCalendar ? (
        <View style={{ marginTop: 35, paddingHorizontal: 35 }}>
          <TouchableOpacity
            style={{
              marginBottom: 35,
              color: "white",
              marginTop: 12,
              backgroundColor: "gray",
              padding: 10,
              alignSelf: "flex-end",
              borderRadius: 10,
              width: "30%",
            }}
            onPress={onBackPress}
          >
            <Text style={{ color: "white" }}>חזור</Text>
          </TouchableOpacity>
          <View>
            <BookingPros />
          </View>
        </View>
      ) : (
        <View>
          <View style={{ marginTop: 40 }}>
            <Text
              style={{
                color: "red",
                fontSize: 35,
                paddingRight: 30,
                color: "white",
                fontWeight: "bold",
              }}
            >
              שירותים
            </Text>
          </View>
          <View style={styles.imgContainer}>
            <TouchableOpacity
              style={styles.imgEle}
              onPress={() => onServicePress("זקן")}
            >
              <View
                style={{
                  zIndex: 100,
                }}
              >
                <SvgComponent width={130} height={130} />
              </View>
              <View>
                <Text
                  style={{ color: "white", paddingBottom: 10, fontSize: 22 }}
                >
                  זקן
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.imgEle}>
              <View
                style={{
                  zIndex: 100,
                }}
              >
                <SvgComponent width={130} height={130} />
              </View>
              <View>
                <Text
                  style={{ color: "white", paddingBottom: 10, fontSize: 22 }}
                >
                  זקן
                </Text>
              </View>
            </View>
            <View style={styles.imgEle}>
              <View
                style={{
                  zIndex: 100,
                }}
              >
                <SvgComponent width={130} height={130} />
              </View>
              <View>
                <Text
                  style={{ color: "white", paddingBottom: 10, fontSize: 22 }}
                >
                  זקן
                </Text>
              </View>
            </View>
            <View style={styles.imgEle}>
              <View
                style={{
                  zIndex: 100,
                }}
              >
                <SvgComponent width={130} height={130} />
              </View>
              <View>
                <Text
                  style={{ color: "white", paddingBottom: 10, fontSize: 22 }}
                >
                  זקן
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            <View
              style={{
                width: "100%",
                maxWidth: "70%",
              }}
            >
              <TouchableOpacity
                style={{
                  color: "white",
                  borderRadius: 20,
                  backgroundColor: "#ffb800",
                }}
                onPress={onBoockingPress}
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
                  קבע תור
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
