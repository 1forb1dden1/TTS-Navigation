"use strict";
exports.__esModule = true;
var react_navigation_stack_1 = require("react-navigation-stack");
var react_navigation_1 = require("react-navigation");
var Home_1 = require("../Screens/Home");
var Tapper_1 = require("../Screens/Tapper");
var screens = {
    Home: {
        screen: Home_1["default"],
        navigationOptions: {
            headerShown: true
        }
    },
    Tapper: {
        screen: Tapper_1["default"],
        navigationOptions: {
            headerShown: true
        }
    }
};
var HomeStack = (0, react_navigation_stack_1.createStackNavigator)(screens);
exports["default"] = (0, react_navigation_1.createAppContainer)(HomeStack);
