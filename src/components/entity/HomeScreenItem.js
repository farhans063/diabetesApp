import { Pressable, StyleSheet, View, Text } from "react-native";

const HomeScreenItem = ({ title, onSelect }) => {
  // Initialisations
  // State
  // Handlers
  // View
  return (
    <Pressable onPress={onSelect}>
      <View style={styles.item}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "light",
  },
  text: {
    fontSize: 18,
    textAlign: "left",
    fontWeight: "bold",
  },
});

export default HomeScreenItem;
