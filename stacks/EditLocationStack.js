import React from "react";
import { createStackNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons'

import EditLocationScreen from "../screens/EditLocationScreen";
import EditAdditionalPhotosScreen from "../screens/EditAdditionalPhotosScreen";
import AdditionalImageBrowser from "../screens/AdditionalImageBrowser";

const EditLocationStack = createStackNavigator(
  {
    Edit: {
      screen: EditLocationScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Edit Location",
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
    },
    EditAdditionalPhotos: EditAdditionalPhotosScreen,
    AdditionalImageBrowser: AdditionalImageBrowser
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  }
);
export default EditLocationStack;
