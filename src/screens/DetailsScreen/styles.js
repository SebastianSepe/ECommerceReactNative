import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: COLORS.background,
  },
    imageContainer: {
      flex:1,
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      elevation: 5,
      padding: 10,
      alignItems: "center",
      marginBottom: 20,
      height: "50%",
      width: "80%",
    },
    image: {
      width: "100%",
      height: "70%",
      borderRadius: 25,
      marginBottom: 10,
    },
    containerImagesExtra: {
      flex:1,
      width: "100%",
      height: "30%",
      borderRadius: 25,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    imagesExtra: {
      width: "45%",
      height: "100%",
      borderRadius: 5,

    },

  
  dataContainer: {
    textAlign: "left",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  valoration:{
    fontSize: 15,
    textAlign: "center",
  },
  body:{
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555555",
    textAlign:"justify",
  },
  footer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: '#CCCCCC',
    borderTopWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.price,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 25,
    padding: 10,
    width: "40%",
    alignItems: "center",
    opacity: 0.8,
    
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
