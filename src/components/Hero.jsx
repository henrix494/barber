import { Image, View } from "react-native";
export default function Hero() {
  return (
    <View>
      <Image
        source={require("../../assets/istockphoto-1472512062-612x612.jpg")}
        style={{
          width: "100%",
          height: 230,
          marginTop: 30,
        }}
      />
    </View>
  );
}
