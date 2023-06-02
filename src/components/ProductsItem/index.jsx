import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const ProductsItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelected(item)}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.valoration}>{item.valoration}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsItem;
