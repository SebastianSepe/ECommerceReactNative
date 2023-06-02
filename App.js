import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { COLORS } from "./src/constants/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
