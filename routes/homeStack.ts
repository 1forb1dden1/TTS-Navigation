import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import Tapper from "../Screens/Tapper";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: true,
    },
  },
  Tapper: {
    screen: Tapper,
    navigationOptions: {
      headerShown: true,
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
