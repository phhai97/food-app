import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/Home";
import DetailScreen from "../Screens/Detail";
import CartScreen from "../Screens/Cart";

const Tab = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Detail" component={DetailScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}
