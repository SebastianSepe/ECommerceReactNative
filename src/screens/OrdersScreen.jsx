import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderItem from "../components/OrderItem";
import { getOrders } from "../store/actions/orders.action";
import { COLORS } from "../constants/colors";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.list);

  useEffect(() => {
    console.log("first");
    dispatch(getOrders());
  }, []);

  const handeleDeleteOrder = () => {
    console.log("Eliminar orden");
  };
  const renderOrderItem = ({ item }) => (
    <OrderItem item={item} onDelete={handeleDeleteOrder} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.background
  }
});
