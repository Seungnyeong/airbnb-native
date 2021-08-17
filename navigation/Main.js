import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Explore from "../screens/Main/Explore";
import Saved from "../screens/Main/Saved";
import MapScreen from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import colors from "../colors";
import utils from "../utils";
import { View } from "react-native";
import Room from "../screens/Main/Room";
import BackBtn from "../components/Auth/BackBtn";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
const TabsNavigator = createBottomTabNavigator();
const MainNavigator = createStackNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator
   
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
    <TabsNavigator.Screen name="Explore" component={Explore}/>
    <TabsNavigator.Screen name="Saved" component={Saved}/>
    <TabsNavigator.Screen name="Map" component={MapScreen}/>
    <TabsNavigator.Screen name="Profile" component={Profile}/>
  </TabsNavigator.Navigator>
);

export default () => (
  <MainNavigator.Navigator screenOptions={{ headerTintColor: "black", headerBackTitleVisible : false, presentation : "float", headerBackImage : () => <BackBtn /> }}>
    <MainNavigator.Screen name="tabs" component={Tabs} 
      options={{ 
        headerShown: false, 
      }}>
     </MainNavigator.Screen>
    <MainNavigator.Screen component={Room} name="RoomDetail" options={{
        headerTransparent: true,
        headerBackground: () => (<BlurView
          intensity={50}
          tint="light"
          style={StyleSheet.absoluteFill}
        />),
    }}  />
  </MainNavigator.Navigator>
)