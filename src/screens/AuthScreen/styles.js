import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  AuthScreen: {
    flex:1,
  },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    prompt: {
      flexDirection: 'row',
      marginTop: 20,
      alignItems: 'center',
    },
    promptMessage: {
      fontSize: 16,
    },
    promptMessageAction: {
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 5,
    },
  });

  export default styles;