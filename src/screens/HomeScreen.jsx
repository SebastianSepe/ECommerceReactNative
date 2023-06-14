import { FlatList, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import DrawerNavigator from "../navigation/DrawerNavigator";
import CategoriesItem from "../components/CategoriesItem";
import React from "react";
import { selectedCategory } from "../store/actions/category.action";
import { COLORS } from "../constants/colors";
import BannerItem from "../components/BannerItem";
import SearchBar from "../components/SearchBar";
import LocationSelector from "../components/LocationSelector";

const HomeScreen = ({ navigation }) => {
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
      <SearchBar />
      <BannerItem />
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoriesItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#000",
  },
});
