import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Explore from "../screens/Auth/Explore/index";
import Saved from "../screens/Main/Saved";
import MapScreen from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import colors from "../colors";
import utils from "../utils";
import { View } from "react-native";

const Main = createBottomTabNavigator();

export default () => (
  <Main.Navigator
   
    screenOptions={({ route }) => ({
        "tabBarActiveTintColor": "#FF5A5F",
        "tabBarLabelStyle": {
            "textTransform": "uppercase",
            "fontWeight": "600"
        },
        "tabBarItemStyle": {
            "paddingTop": 10
        },
        "tabBarStyle": [
            {
            "display": "flex"
            },
            null
        ],
        tabBarIcon: ({ focused }) => {
        const isAndroid = utils.isAndroid();
        let iconName = `${isAndroid ? "md-" : "ios-"}`;
        if (route.name === "Explore") {
          iconName += "search";
        } else if (route.name === "Saved") {
          iconName += "heart";
        } else if (route.name === "Map") {
          iconName += "map";
        } else if (route.name === "Profile") {
          iconName += "person";
        }
        return (
          <Ionicons
            name={iconName}
            size={24}
            color={focused ? colors.red : "grey"}
          />
        );
      }
    })}
  >
    <Main.Screen name="Explore" component={Explore}></Main.Screen>
    <Main.Screen name="Saved" component={Saved}></Main.Screen>
    <Main.Screen name="Map" component={MapScreen}></Main.Screen>
    <Main.Screen name="Profile" component={Profile}></Main.Screen>
  </Main.Navigator>
);