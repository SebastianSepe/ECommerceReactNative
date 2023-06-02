import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  order: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: COLORS.quaternaryBackground
  },
  orderDetails: {
    flex: 1,
    marginRight: 10,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
  },
  total: {
    fontSize: 18,
  },
  deleteButton: {
    padding: 8,
  },
});


export default styles;
