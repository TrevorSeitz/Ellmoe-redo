import React from "react";
import { createStackNavigator } from "react-navigation";
// import { Icon } from "expo";
import { Ionicons } from '@expo/vector-icons'

import DashboardTabNavigator from "./DashboardTabNavigator";

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
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
);

export default DashboardStackNavigator;
