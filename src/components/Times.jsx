import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

const times = ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

// Function to divide times into chunks of three
function chunk(array, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}

const Times = () => {
  const timesInRows = chunk(times, 3);

  return (
    <View
      style={{
        alignItems: "center",
        paddingTop: 20,
        marginBottom: 50,
      }}
    >
      <Text
        style={{
          color: "white",
          alignSelf: "flex-end",
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        בחר זמן
      </Text>
      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          scrollEnabled={false}
          data={timesInRows}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              {item.map((time) => (
                <TouchableOpacity
                  key={time}
                  onPress={() => console.log(time)}
                  style={{
                    color: "white",
                    marginTop: 12,
                    backgroundColor: "gray",
                    padding: 10,
                    alignItems: "center",
                    borderRadius: 10,
                    width: "30%",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Times;
