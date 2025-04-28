import {
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Screen from "../layout/Screen";

const EducationScreen = () => {
  // Initialisations
  const links = [
    {
      id: "1",
      name: "Exercise and diabetes",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0733865105702319",
    },
    {
      id: "2",
      name: "Effect of diet on type 2 diabetes",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5426415/",
    },
    {
      id: "3",
      name: "Evidence-based European recommendations for the dietary management of diabetes",
      link: "https://link.springer.com/article/10.1007/s00125-023-05894-8",
    },
    {
      id: "4",
      name: "The importance of measuring self-efficacy in patients with diabetes ",
      link: "https://academic.oup.com/fampra/article-abstract/28/1/82/500686",
    },
  ];

  // State
  // Handlers
  const openLink = (link) => {
    Linking.openURL(link).catch((err) =>
      console.error("Error opening selected link:", err)
    );
  };

  // View
  return (
    <Screen>
      <Text style={styles.title}>Learn about Diabetes</Text>
      <Text style={styles.subtitle}>
        Here you will find articles and websites that teach you how to manage
        your diabetes effectively.
      </Text>

      <Text style={styles.header}>Select an article to open:</Text>
      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => openLink(item.link)}
          >
            <Text style={styles.link}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
  header: {
    fontSize: 22,
    fontWeight: "800",
  },
  item: {
    padding: 15,
    borderBottomWidth: 2,
  },
  link: {
    fontSize: 20,
    fontWeight: "800",
    color: "blue",
  },
});

export default EducationScreen;
