import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants/color";
import TTSNavigator from "../components/TTSNavigator";

export default function Home({ navigation }) {
  const Message =
    "We are now on the home screen. This app is developed for the purpose of collecting data.";

  return (
    <View style={styles.container}>
      <TTSNavigator
        style={styles.container}
        text={Message}
        file={"Tapper"}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  text: {
    color: colors.black,
    fontSize: 30,
  },
});
