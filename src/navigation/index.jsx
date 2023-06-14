import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./ShopNavigator";
import AuthNavigator from "./AuthNavigator";
import AuthScreen from "../screens/AuthScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { useSelector } from "react-redux";
import BottomTabNavigator from "./BottomTabNavigator";

export default () => {
  const userId = useSelector(state => state.auth.userId)
  return (
    <NavigationContainer>
      {/* {userId ? <BottomTabNavigator /> : <AuthNavigator />} */}
      {userId ? <AuthNavigator /> : <BottomTabNavigator />}
    </NavigationContainer>
  );
};
