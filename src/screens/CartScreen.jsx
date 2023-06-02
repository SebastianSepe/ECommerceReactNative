import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { confirm_cart, remove_item } from "../store/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../components/CartItem";
import React from "react";
import { COLORS } from "../constants/colors";


const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const handleDeleteItem = id => {
    console.log(id);
    dispatch(remove_item(id));
  };

  const handleConfirmCart = () => {
    dispatch(confirm_cart(items, total));
  };

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderCartItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text style={styles.confirmText}>Confirmar</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.priceText}>{`Total: ${total}`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
} 

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    flex: 1,
    marginBottom: 20,
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  confirm: {
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  confirmText: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 16,
  },
  totalContainer: {
    marginLeft: 10,
    backgroundColor: COLORS.background,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  priceText: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 16,
  },
});

