import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "./constants/color";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/homeStack";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
