import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

function AddGoals(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Your Course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View>
        <Button title="Add Goal" onPress={addGoalHandler} color="#141E97" />
      </View>
    </View>
  );
}

export default AddGoals;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#cccc",
    borderRadius: 5,
    color: "grey",
    padding: 8,
    marginBottom: 8,
  },
});
