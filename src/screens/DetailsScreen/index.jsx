import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { add_item } from "../../store/actions/cart.action";
import styles from "./styles";

import { COLORS } from "../../constants/colors";

const DetailsScreen = () => {
  const dispatch = useDispatch();
  const itemProduct = useSelector((state) => state.products.selected);

  const handleAddItem = () => {
    dispatch(add_item(itemProduct));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={itemProduct.img} />
        <View style={styles.containerImagesExtra}>
        <Image style={styles.imagesExtra} source={itemProduct.img2} />
        <Image style={styles.imagesExtra} source={itemProduct.img3} />
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>{itemProduct.name}</Text>
          <Text style={styles.valoration}>{itemProduct.valoration}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.description}>{itemProduct.description}</Text>
          
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>$ {itemProduct.price}</Text>
          <TouchableOpacity style={styles.button} onPress={handleAddItem}>
            <Text style={styles.buttonText} >Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
  