import { StyleSheet } from "react-native";
import COLORS from '../../constants/colors'

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    elevation: 2, // Agregar sombra
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});


export default styles;
