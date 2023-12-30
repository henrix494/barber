import { View, Text } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  calendarConfig,
  calendarTheme,
  formattedDate,
  formattedDate2,
} from "../../utils/calendarConfig";
import Times from "./Times";
export default function BookingPros() {
  const [selected, setSelected] = useState("");
  const [currentMonth, setCurrentMonth] = useState({
    currentLifeMonth: "",
    currentCalendarMonth: formattedDate2,
  });
  function getMarkedDates(selected) {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "#5E60CE",
        selectedTextColor: "white",
      },
    };
  }

  const marked = getMarkedDates(selected);

  function onDayPress(day) {
    setSelected(day.dateString);
  }
  useEffect(() => {
    setCurrentMonth((prev) => ({ ...prev, currentLifeMonth: formattedDate2 }));
  }, []);
  const handleMonthChange = (month) => {
    setCurrentMonth((prev) => ({
      ...prev,
      currentCalendarMonth: month.month,
    }));
  };
  LocaleConfig.locales["he"] = calendarConfig;
  LocaleConfig.defaultLocale = "he";

  return (
    <View>
      <Text
        style={{
          color: "white",
          textAlign: "right",
          paddingBottom: 10,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        קביעת תור
      </Text>
      <View
        style={{
          borderTopWidth: 3,
          borderColor: "white",
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomWidth: 3,
          borderBottomColor: "white",
        }}
      >
        <Calendar
          onDayPress={onDayPress}
          theme={calendarTheme}
          markedDates={marked}
          hideExtraDays={true}
          minDate={formattedDate}
          disableArrowLeft={
            currentMonth.currentCalendarMonth === currentMonth.currentLifeMonth
          }
          onMonthChange={handleMonthChange}
        />
      </View>
      <Times />
    </View>
  );
}
