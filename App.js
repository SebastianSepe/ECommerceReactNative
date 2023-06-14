import { Provider } from "react-redux";
import store from "./src/store";
import { StyleSheet, View, SafeAreaView, StatusBar  } from "react-native";
import { COLORS } from "./src/constants/colors";
import MainNavigator from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    margin: 5
  },
});
