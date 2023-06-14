import Carousel from 'react-native-snap-carousel';
import { View, Text, Image, StyleSheet } from 'react-native';

const BannerItem = () => {
    const data = [
      {
        id: 1,
        image: require('../../assets/category/Originales/Automotriz.jpg'),
      },
      {
        id: 2,
        image: require('../../assets/category/Originales/AlimentosYBebidas.jpg'),
      },
      {
        id: 3,
        image: require('../../assets/category/Originales/Automotriz.jpg'),
      },
      {
        id: 4,
        image: require('../../assets/category/Originales/AlimentosYBebidas.jpg'),
      },
    ];
  
    const renderBannerItem = ({ item }) => (
      <View style={{padding: 20}}>
        <Image source={item.image} style={stlyes.imageBanner} />
      </View>
    );
  
    return (
      <Carousel
        data={data}
        renderItem={renderBannerItem}
        sliderWidth={400}
        itemWidth={200}
        loop={true}
        
      />
    );
  };

  
  export default BannerItem;
  
  
const stlyes = StyleSheet.create({
    imageBanner:  {
      width: 200, 
      height: 200,
      borderRadius: 15,
      margin: 5,
      
    }
 
  })
