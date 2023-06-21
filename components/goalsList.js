import { View, StyleSheet, Pressable, Text } from "react-native";

function GoalsList(props) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: "#ccc" }}
        onPress={props.deleteGoal.bind(this, props.id)}
      >
        <Text style={styles.innerText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalsList;

const styles = StyleSheet.create({
  container: {
    marginTop: "30%",
  },
  innerText: {
    color: "white",
    backgroundColor: "#444651",
    margin: 5,
    padding: 6,
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
