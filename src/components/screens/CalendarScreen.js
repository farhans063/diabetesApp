import {
  Text,
  TextInput,
  Pressable,
  Keyboard,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import Screen from "../layout/Screen";

const CalendarScreen = () => {
  // Initialisations
  const today = moment().format("YYYY-MM-DD");

  // States
  const [userSelectedDate, setUserSelectedDate] = useState(today);
  const [reading, setReading] = useState("");
  const [allReadings, setAllReadings] = useState([]);

  const handleAdd = () => {
    if (reading.trim() !== "") {
      setAllReadings([...allReadings, reading]);
      setReading("");
      Keyboard.dismiss();
    }
  };

  return (
    <Screen>
      <Text style={styles.title}>Calendar</Text>
      <Calendar
        onDayPress={(day) => setUserSelectedDate(day.dateString)}
        markedDates={{
          [userSelectedDate]: { selected: true, selectedColor: "grey" },
        }}
      />
      {userSelectedDate === today && (
        <View>
          <Text style={styles.text}>Enter a reading in mmol/L:</Text>
          <TextInput
            style={styles.input}
            placeholder="Add a reading..."
            keyboardType="numeric"
            value={reading}
            onChangeText={setReading}
          />
          <Pressable style={styles.pressable} onPress={handleAdd}>
            <Text style={styles.pressableText}>Add</Text>
          </Pressable>
        </View>
      )}
      <Text>User selected date: {userSelectedDate}</Text>
      <Text>Todays date: {today}</Text>
      {allReadings.map((reading, index) => (
        <Text key={index} style={styles.list}>
          {reading}
        </Text>
      ))}
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "800",
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
    color: "grey",
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  pressable: {
    backgroundColor: "grey",
    padding: 10,
    marginBottom: 10,
  },
  pressableText: {
    color: "white",
    fontWeight: "bold",
  },
  list: {
    fontSize: 18,
  },
});

export default CalendarScreen;
