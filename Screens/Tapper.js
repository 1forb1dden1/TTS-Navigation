import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { colors } from "../constants/color";

const Tapper = (props) => {
  const [tapped, setTapped] = useState(0);
  const { title = "Tap This" } = props;

  return (
    <View style={styles.container}>
      <Button title={title} onPress={() => setTapped(tapped + 1)}></Button>
      <Text style={styles.text}>{tapped}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.ghostwhite,
  },
  text: {
    fontSize: 30,
    color: colors.black,
  },
});

export default Tapper;
