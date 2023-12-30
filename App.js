import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Navbar from "./src/components/Navbar";
import User from "./src/components/User";
import Hero from "./src/components/Hero";
import Services from "./src/components/Services";
import OurBarbares from "./src/components/OurBarbares";
import SignModel from "./src/components/SignModel";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./src/app/Register";
const Stack = createNativeStackNavigator();

function MainScreen() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView stickyHeaderIndices={[1]}>
          <StatusBar style="auto" />
          <Navbar />
          <User />
          <Hero />
          <Services />
          <OurBarbares />
        </ScrollView>
      </View>
      <SignModel />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Main"
            component={MainScreen}
          />
          <Stack.Screen
            name="Register"
            options={{
              headerTitle: "הרשמה",
              headerStyle: { backgroundColor: "#191919" },
              headerTintColor: "#ffb800",
            }}
            component={Register}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    height: "100%",
  },
});
