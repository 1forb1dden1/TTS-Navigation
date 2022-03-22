import { useState } from "react";
import { Pressable, View } from "react-native";
import * as Speech from "expo-speech";
const TTSNavigator = (props) => {
  const [clicked, setclicked] = useState(0);

  const pressHandler = () => {
    console.log(clicked);
    setclicked(clicked + 1);
    if (clicked >= 2) {
      Speech.stop(); // sometimes it doesn't stop the speech and just go to the next page.
      props.navigation.navigate(props.file);
      setclicked(0);
    }
    Speech.isSpeakingAsync().then((speaking) => {
      //
      if (!speaking) {
        Speech.speak(props.text, {
          onDone: () => props.navigation.navigate(props.file),
        });
        setclicked(0);
      }
    });
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={() => pressHandler()}>
      <View style={{ flex: 1 }} />
    </Pressable>
  );
};

export default TTSNavigator;
