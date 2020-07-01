import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOuputText] = useState("Please, clic on the button");

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Clic on buttons</Text>

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setOuputText("Thanks ...")} />
        <Button title="-" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row"
  },
  buttonControl: {
    width: 50,
    height: 50
  },
  labelText: {
    fontSize: 20,
    color: "green",
    marginTop: 10
  }
});
