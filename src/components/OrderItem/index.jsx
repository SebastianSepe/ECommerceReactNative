import { Text, TouchableOpacity, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import styles from "./styles";

const formatDay = date => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.order}>
      <View style={styles.orderDetails}>
        <Text style={styles.date}>Fecha: {formatDay(item.date)}</Text>
        <Text style={styles.total}>Total: {item.total}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
        <Ionicons name="md-trash" color={"red"} size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default OrderItem;
