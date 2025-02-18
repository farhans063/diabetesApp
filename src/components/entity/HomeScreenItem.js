import { Pressable, StyleSheet, Text } from "react-native";

const HomeScreenItem = ({ title, onSelect }) => {
  // Initialisations
  // State
  // Handlers
  // View
  return (
    <Pressable style={styles.item} onPress={onSelect}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    borderTopWidth: 2,
    borderColor: "grey",
    backgroundColor: "limegreen",
    borderRadius: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
    paddingInline: 10,
  },
});

export default HomeScreenItem;
