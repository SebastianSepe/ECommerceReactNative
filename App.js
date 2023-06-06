import { Provider } from "react-redux";
import store from "./src/store";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { COLORS } from "./src/constants/colors";
import MainNavigator from './src/navigation'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  style="auto"/>
      <Provider store={store}>
          <MainNavigator />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    width: '100%',
    height: '100%',
  },
});
