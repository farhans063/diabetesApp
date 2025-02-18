import { StyleSheet, Image, Text, ScrollView } from "react-native";
import Screen from "../layout/Screen";
import HomeScreenItem from "../entity/HomeScreenItem.js";

const HomeScreen = ({ navigation }) => {
  // Initialisations
  // State
  // Handlers
  // View
  return (
    <Screen>
      <ScrollView>
        <Image
          source={require("../../data/DiabetesTrackerLogo4.jpg")}
          style={styles.image}
        />
        <Text style={styles.subtitle}>
          Here to help you manage your diabetes a little better, everyday!
        </Text>
        <HomeScreenItem
          title={"Calendar"}
          onSelect={() => navigation.navigate("CalendarScreen")}
        />
        <HomeScreenItem
          title={"Learn about Diabetes"}
          onSelect={() => navigation.navigate("EducationScreen")}
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginBottom: 10,
    width: 320,
    height: 40,
    resizeMode: "contain",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "grey",
    marginBottom: 25,
  },
});

export default HomeScreen;
