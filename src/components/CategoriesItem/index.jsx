import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

import styles from "./styles";

const CategoriesItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
      <View style={styles.card}>
        <Image style={styles.image} source={item.img} resizeMode="cover" />
        <Text style={styles.categoryName}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesItem;

// <Image style={styles.image} source={require("./path/to/image.png")} resizeMode="center" />
