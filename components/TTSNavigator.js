"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Speech = require("expo-speech");
var TTSNavigator = function (props) {
    var _a = (0, react_1.useState)(0), clicked = _a[0], setclicked = _a[1];
    var pressHandler = function () {
        console.log(clicked);
        setclicked(clicked + 1);
        if (clicked >= 2) {
            Speech.stop(); // sometimes it doesn't stop the speech and just go to the next page.
            props.navigation.navigate(props.file);
            setclicked(0);
        }
        Speech.isSpeakingAsync().then(function (speaking) {
            //
            if (!speaking) {
                Speech.speak(props.text, {
                    onDone: function () { return props.navigation.navigate(props.file); }
                });
                setclicked(0);
            }
        });
    };
    return (<react_native_1.Pressable style={{ flex: 1 }} onPress={function () { return pressHandler(); }}>
      <react_native_1.View style={{ flex: 1 }}/>
    </react_native_1.Pressable>);
};
exports["default"] = TTSNavigator;
