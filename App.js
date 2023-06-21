import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import AddGoals from "./components/addGoals";
import GoalsList from "./components/goalsList";

export default function App() {
  const [enteredText, setEnteredText] = useState([]);

  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setEnteredText((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function onDeleteHandler(id) {
    setEnteredText((currentGoal) =>
      currentGoal.filter((goal) => goal.id !== id)
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo List</Text>
      <AddGoals onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={enteredText}
          renderItem={(itemData) => {
            return (
              <GoalsList
                text={itemData.item.text}
                id={itemData.item.id}
                deleteGoal={onDeleteHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "30%",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
