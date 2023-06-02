import { StyleSheet, Dimensions, Platform } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    width: Dimensions.get('window').width - 140, // Adjust the width according to your requirements
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  categoryName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default styles;
