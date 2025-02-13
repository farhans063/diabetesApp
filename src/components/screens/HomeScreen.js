import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";

const HomeScreen = ({ navigation }) => {
  // Initialisations
  // State

  // Handlers
  const goToCalendarScreen = () => navigation.navigate("CalendarScreen");
  const goToEducationScreen = () => navigation.navigate("EducationScreen");

  // View
  return (
    <Screen>
      <View>
        <ScrollView>
          return (
          <Pressable onPress={goToCalendarScreen} style={styles.item}>
            <Text style={styles.text}>Go to Calendar Screen</Text>
          </Pressable>
          <Pressable onPress={goToEducationScreen} style={styles.item}>
            <Text style={styles.text}>Go to Education Screen</Text>
          </Pressable>
          );
        </ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgrey",
  },
  text: {
    fontSize: 16,
  },
});

export default HomeScreen;
