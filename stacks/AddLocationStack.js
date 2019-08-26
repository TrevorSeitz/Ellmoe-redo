import React from "react";
import {Button} from 'react-native'
import { createStackNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons'

import AddLocationScreen from "../screens/AddLocationScreen";

const AddLocationStack = createStackNavigator(
  {
    AddLocation: {
      screen: AddLocationScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Add New Location",
          headerLeft: (
            <Ionicons
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        // ),
        // headerRight: <Button onPress={() => navigation.navigate('AddLocationScreen')} title="Clear" />
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

export default AddLocationStack;
