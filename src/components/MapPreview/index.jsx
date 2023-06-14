import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import Map from "../../constants/Map";

const MapPreview = (props) => {
  const mapPreviewUrl = props.location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${props.location.lat},${props.location.lng}&key=${Map.API_KEY}`
    : "";
  
    useEffect(() => {
      console.log(props.location);
    }, []);
  

  return (
    <View style={styles.mapPreview}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
      ) : (
        props.children
      )}
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});