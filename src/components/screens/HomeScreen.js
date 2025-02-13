import { StyleSheet, ScrollView } from "react-native";
import Screen from "../layout/Screen";
import HomeScreenItem from "../entity/HomeScreenItem.js";

const HomeScreen = ({ navigation }) => {
  // Initialisations
  // State

  // Handlers
  const goToCalendarScreen = () => navigation.navigate("CalendarScreen");
  const goToEducationScreen = () => navigation.navigate("EducationScreen");

  // View
  return (
    <Screen>
      <ScrollView style={styles.container}>
        <HomeScreenItem title={"Calendar"} onSelect={goToCalendarScreen} />
        <HomeScreenItem
          title={"Learn about Diabetes"}
          onSelect={goToEducationScreen}
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
