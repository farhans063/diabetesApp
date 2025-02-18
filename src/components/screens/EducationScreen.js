import { StyleSheet, ScrollView, Text } from "react-native";
import Screen from "../layout/Screen";

const EducationScreen = () => {
  // Initialisations
  // State
  // Handlers
  // View
  return (
    <Screen>
      <ScrollView>
        <Text style={styles.title}>Learn about Diabetes</Text>
        <Text style={styles.subtitle}>
          Here you will find articles and websites that teach you how to manage
          your diabetes effectively.
        </Text>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "900",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "grey",
    marginBottom: 25,
  },
});

export default EducationScreen;
