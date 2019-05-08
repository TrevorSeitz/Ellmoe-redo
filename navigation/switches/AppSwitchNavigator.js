import React from "react";
import { createSwitchNavigator } from "react-navigation";

import WelcomeScreen from "../../screens/WelcomeScreen";
import LoadingScreen from "../../screens/auth/LoadingScreen";
import AppDrawerNavigator from "../AppDrawerNavigator";

const AppSwitchNavigator = createSwitchNavigator(
  {
    WelcomeScreen: WelcomeScreen,
    Loading: LoadingScreen,
    Dashboard: AppDrawerNavigator
  },
  {
    initialRouteName: "Loading"
  }
);

export default AppSwitchNavigator;
