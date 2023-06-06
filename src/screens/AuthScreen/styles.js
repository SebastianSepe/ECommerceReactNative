import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authScreen: {
flex: 1,
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
  },
  container: {
    elevation: 2,
    margin: 25,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  prompt: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  promptMessage: {
    fontSize: 16,
  },
  promptMessageAction: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default styles;
