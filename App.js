import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import Services from "./src/components/Services";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ScrollView>
          <StatusBar style="auto" />
          <Navbar />
          <Hero />
          <Services />
        </ScrollView>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    height: "100%",
  },
});
