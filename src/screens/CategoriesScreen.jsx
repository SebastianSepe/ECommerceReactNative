import { FlatList, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CategoriesItem from "../components/CategoriesItem";
import React from "react";
import { selectedCategory } from "../store/actions/category.action";
import { COLORS } from "../constants/colors";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Products", {
      name: item.title,
    });
  };

  const renderCategoriesItem = ({ item }) => (
    <SafeAreaView>
      <View style={styles.categoriesContainer}>
        <CategoriesItem item={item} onSelected={handleSelectedCategory} />
      </View>
    </SafeAreaView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoriesItem}
        keyExtractor={(item) => item.id}
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  // categoriesContainer: {
  //   margin: 10,
  //   width: '100%',
  //   height: '100%'
  // },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#000",
  },
  
});
