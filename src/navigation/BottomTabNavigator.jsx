import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLORS } from "../constants/colors";

import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import ShopNavigator from "./ShopNavigator";
import FavoriteNavigator from "./FavoriteNavigator";
import LocationScreen from "../screens/LocationScreen";

const BottomTabs = createBottomTabNavigator();
const size = 30;
export default BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopNavigator"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Ionicons
                name="home"
                size={size}
                color={focused ? COLORS.white : COLORS.secondary}
                style={styles.tabIcon}
              />
              {/* <Text style={{ color: focused ? COLORS.primary : COLORS.black }}>
                Shop
              </Text> */}
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Fav"
        component={FavoriteNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Ionicons
                name="heart"
                size={size}
                color={focused ? COLORS.white : COLORS.secondary}
                style={styles.tabIcon}
              />
              {/* <Text style={{ color: focused ? COLORS.primary : COLORS.black }}>
                Fav
              </Text> */}
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Ionicons
                name="cart"
                size={size}
                color={focused ? COLORS.white : COLORS.secondary}
                style={styles.tabIcon}
              />
              {/* <Text style={{ color: focused ? COLORS.primary : COLORS.black }}>
                Cart
              </Text> */}
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Order"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Ionicons
                name="list"
                size={size}
                color={focused ? COLORS.white : COLORS.secondary}
                style={styles.tabIcon}
              />
              {/* <Text style={{ color: focused ? COLORS.primary : COLORS.black }}>
                Order
              </Text> */}
            </View>
          ),
        }}
      />
        <BottomTabs.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              <Ionicons
                name="location"
                size={size}
                color={focused ? COLORS.white : COLORS.secondary}
                style={styles.tabIcon}
              />
              {/* <Text style={{ color: focused ? COLORS.primary : COLORS.black }}>
                Shop
              </Text> */}
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    // backgroundColor: COLORS.white,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    overflow: "hidden",
    elevation: 8,
    margin: 5,
  },
  tabContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: COLORS.primary,
    opacity: 0.5,
  },
  tabIcon: {},

  // tabContainer: {
  //   flex:1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
