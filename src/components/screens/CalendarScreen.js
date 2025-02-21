import {
  Text,
  TextInput,
  Pressable,
  Keyboard,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import Screen from "../layout/Screen";

const CalendarScreen = () => {
  // Initialisations
  const today = moment().format("YYYY-MM-DD");

  // States
  const [userSelectedDate, setUserSelectedDate] = useState(today);
  const [reading, setReading] = useState("");
  const [allReadings, setAllReadings] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("ReadingsData");
        if (storedData) {
          setAllReadings(JSON.parse(storedData));
        }
      } catch (error) {
        console.error(`Error loading data: ${error}`);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("ReadingsData", JSON.stringify(allReadings));
      } catch (error) {
        console.error(`Error saving data: ${error}`);
      }
    };
    saveData();
  }, [allReadings]);

  // Handler
  const handleAdd = () => {
    setAllReadings((allReadings) => ({
      ...allReadings,
      [userSelectedDate]: [...(allReadings[userSelectedDate] || []), reading],
    }));
    Keyboard.dismiss();

    const convertedReading = parseFloat(reading);

    if (convertedReading >= 4 && convertedReading <= 7) {
      setMessage("Heathy range. Keep doing what you're doing!");
    } else if (convertedReading > 7 && convertedReading < 11) {
      setMessage("High: consider exercising regularly.");
    } else if (convertedReading < 4) {
      setMessage(
        "Very low immediately eat or drink something sweet, check again in 10-15 mins."
      );
    } else if (convertedReading >= 11) {
      setMessage(
        "Very high: drink plenty of water, exercise and avoid eating too much sugary or starchy food."
      );
    } else {
      setMessage("Unable to interpret blood glucose range");
    }

    setReading("");
  };

  // View
  return (
    <Screen>
      <ScrollView>
        <Calendar
          onDayPress={(day) => setUserSelectedDate(day.dateString)}
          markedDates={{
            [userSelectedDate]: { selected: true, selectedColor: "limegreen" },
          }}
          theme={{
            calendarBackground: "lightgrey",
            monthTextColor: "black",
            textMonthFontSize: 18,
            textMonthFontWeight: 800,
            arrowColor: "black",
            textSectionTitleColor: "black",
            textDayHeaderFontSize: 14,
            textDayHeaderFontWeight: "bold",
            textDayFontSize: 16,
            textDayFontWeight: "bold",
            textDisabledColor: "grey",
            dayTextColor: "black",
            todayTextColor: "limegreen",
          }}
        />

        {userSelectedDate === today && (
          <View>
            <Text style={styles.text}>
              Enter blood glucose reading (mmol/L):
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Add a reading..."
              keyboardType="numeric"
              value={reading}
              onChangeText={setReading}
            />

            <Pressable
              style={styles.pressable}
              onPress={handleAdd}
              disabled={reading.trim() === ""}
            >
              <Text style={styles.pressableText}>Add</Text>
            </Pressable>

            <Text style={styles.readingRange}>
              Current blood glucose levels: {message}
            </Text>
          </View>
        )}
        <Text style={styles.text}>Readings from {userSelectedDate}</Text>
        <View>
          {allReadings[userSelectedDate] &&
          allReadings[userSelectedDate].length > 0 ? (
            allReadings[userSelectedDate].map((item, index) => (
              <Text key={index} style={styles.listText}>
                {item}
              </Text>
            ))
          ) : (
            <Text style={styles.listText}>
              No readings were submitted on this date.
            </Text>
          )}
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 5,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "800",
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  pressable: {
    backgroundColor: "grey",
    padding: 10,
    marginBottom: 5,
  },
  pressableText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  readingRange: {
    color: "grey",
    fontSize: 18,
    fontWeight: "800",
  },
  listText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 2,
    paddingInline: 10,
  },
});

export default CalendarScreen;
