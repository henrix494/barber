import { I18nManager } from "react-native";
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Add 1 because JavaScript months start at 0
const day = currentDate.getDate();
const formattedDate = `${year}-${month}-${day}`;
const formattedDate2 = parseInt(month);
const calendarConfig = {
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
  dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
  today: "היום",
  firstDay: 0, // Sunday is the first day of the week
};

const calendarTheme = {
  backgroundColor: "black",
  calendarBackground: "black",
  textSectionTitleColor: "white",

  selectedDayTextColor: "white",
  todayTextColor: "white",
  dayTextColor: "white",
  textDisabledColor: "grey",
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

  "stylesheet.calendar.main": {
    week: {
      marginTop: 7,
      marginBottom: 7,
      flexDirection: "row-reverse",
      justifyContent: "space-around",
    },
  },
  "stylesheet.calendar.header": {
    week: {
      marginTop: 7,
      flexDirection: "row-reverse",
      justifyContent: "space-around",
    },
  },
};

export { calendarConfig, calendarTheme, formattedDate, formattedDate2 };
