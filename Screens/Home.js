"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var color_1 = require("../constants/color");
var TTSNavigator_1 = require("../components/TTSNavigator");
function Home(_a) {
    var navigation = _a.navigation;
    var Message = "We are now on the home screen. This app is developed for the purpose of collecting data.";
    return (<react_native_1.View style={styles.container}>
      <TTSNavigator_1["default"] style={styles.container} text={Message} file={"Tapper"} navigation={navigation}/>
    </react_native_1.View>);
}
exports["default"] = Home;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color_1.colors.gray
    },
    text: {
        color: color_1.colors.black,
        fontSize: 30
    }
});
