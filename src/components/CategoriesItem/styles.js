import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: '50%',
    height: '50%',
    aspectRatio: 1,
    margin: 8,
    
    
  },
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    padding:3,

    

  },
  image: {
    width: "100%",
    height: "100%",
    // marginBottom: 8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryName: {
    paddingTop: 20,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});




export default styles;
