import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./ShopNavigator";
import AuthNavigator from "./AuthNavigator";
import AuthScreen from "../screens/AuthScreen";

export default () => {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      {user ? <ShopNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
