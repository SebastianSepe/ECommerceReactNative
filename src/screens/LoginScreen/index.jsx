import React from "react";
import { View, Alert, ImageBackground, Image } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleIniciarSesion = () => {
    console.log("Sesión iniciada");
  };

  const handleRegistrarse = () => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to register a new user?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Accept",
          onPress: () => {
            navigation.navigate("Register");
          },
        },
      ]
    );
  };

  return (
    <ImageBackground
      source={require("../../assets/img/BGLoginAndRegister.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title
            title="Login"
            titleStyle={styles.title}
            style={styles.cardTitle}
          />
          <Card.Content>
            <TextInput label="Email " style={styles.input} />
            <TextInput
              label="Password"
              secureTextEntry
              style={styles.input}
            />
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
              onPress={handleIniciarSesion}
              style={styles.button}
            >
              Log In
            </Button>
            <Button
              mode="outlined"
              onPress={handleRegistrarse}
              style={styles.button}
            >
              Register
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
