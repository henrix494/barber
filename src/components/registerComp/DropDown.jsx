import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDayOfBirth,
  updateMonthOfBirth,
  updateYearOfBirth,
} from "../../features/userDataSlice";
const DropDown = () => {
  const currentYear = new Date().getFullYear();

  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const months = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ];
  const years = Array.from({ length: currentYear - 1952 }, (_, i) =>
    String(1953 + i)
  );
  const styles = StyleSheet.create({
    buttonPicker: { backgroundColor: "black", width: "30%", borderRadius: 50 },
  });

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between",
        width: "80%",
      }}
    >
      <SelectDropdown
        data={days}
        buttonStyle={styles.buttonPicker}
        buttonTextStyle={{ color: "white" }}
        defaultButtonText="יום"
        onSelect={(selectedItem) => {
          console.log(userData, "userData");
          dispatch(updateDayOfBirth(selectedItem));
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
      <SelectDropdown
        data={months}
        buttonStyle={styles.buttonPicker}
        buttonTextStyle={{ color: "white" }}
        defaultButtonText="חודש "
        onSelect={(selectedItem, index) => {
          dispatch(updateMonthOfBirth(selectedItem));
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
      <SelectDropdown
        data={years}
        buttonStyle={styles.buttonPicker}
        buttonTextStyle={{ color: "white" }}
        defaultButtonText="שנה"
        onSelect={(selectedDay) => {
          dispatch(updateYearOfBirth(selectedDay));
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </View>
  );
};

export default DropDown;
