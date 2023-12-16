import { View, Text } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import React, { useState, useEffect, useCallback, useMemo } from "react";

export default function BookingPros() {
  const [selected, setSelected] = useState("");

  LocaleConfig.locales["he"] = {
    monthNames: [
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
    ],
    monthNamesShort: [
      "Janv.",
      "Févr.",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juil.",
      "Août",
      "Sept.",
      "Oct.",
      "Nov.",
      "Déc.",
    ],
    dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
    dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"].reverse(),
    today: "היום",
    firstDay: 0, // Sunday is the first day of the week
  };
  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "#5E60CE",
        selectedTextColor: "white",
      },
    };
  }, [selected]);

  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);
  LocaleConfig.defaultLocale = "he";

  return (
    <View>
      <Calendar
        onDayPress={onDayPress}
        theme={{
          backgroundColor: "black",
          calendarBackground: "black",
          textSectionTitleColor: "white",

          selectedDayTextColor: "white",
          todayTextColor: "white",
          dayTextColor: "white",

          dotColor: "orange",
          selectedDotColor: "orange",
          arrowColor: "orange",
          monthTextColor: "white",
          indicatorColor: "white",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        markedDates={marked}
      />
    </View>
  );
}
