import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
});

export default styles;
