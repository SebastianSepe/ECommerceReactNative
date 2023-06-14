import React, { useState } from "react";
import { View, Button, Text, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import MapPreview from "../MapPreview";

const LocationSelector = (props) => {
  const [pickedLocation, setPickedLocation] = useState();

  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    props.onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });

    console.log(location)
  };

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos Insuficientes",
        "Necesita dar Permisos de la localizacion para usar la aplicacion",
        [{ text: "ok" }]
      );

      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text> Ubicacion en procesos...</Text>
        {/* {pickedLocation
                    ? <Text>{pickedLocation.lat},{pickedLocation.lng}</Text>
                    : 
                } */}
      </MapPreview>
      <Button
        title="Obtener ubicacion"
        color="orange"
        onPress={handleGetLocation}
      />
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "pink",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
