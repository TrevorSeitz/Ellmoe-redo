import React from "react";
import { createStackNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons'
// Screens;
import HomeScreen from "../screens/HomeScreen";

const HomeStack = createStackNavigator(
  {
    Map: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Map",
          headerLeft: (
            <Ionicons
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default HomeStack;
