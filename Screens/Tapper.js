"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var color_1 = require("../constants/color");
var Tapper = function (props) {
    var _a = (0, react_1.useState)(0), tapped = _a[0], setTapped = _a[1];
    var _b = props.title, title = _b === void 0 ? "Tap This" : _b;
    return (<react_native_1.View style={styles.container}>
      <react_native_1.Button title={title} onPress={function () { return setTapped(tapped + 1); }}></react_native_1.Button>
      <react_native_1.Text style={styles.text}>{tapped}</react_native_1.Text>
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: color_1.colors.ghostwhite
    },
    text: {
        fontSize: 30,
        color: color_1.colors.black
    }
});
exports["default"] = Tapper;
