import React, { useState } from "react";
import { View, Alert, ImageBackground } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions/auth.action";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const handleIniciarSesion = () => {
    Alert.alert(
      "Confirm",
      "¿Are you sure you want to login with an existing user?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Accept",
          onPress: () => {
            navigation.navigate("Login");
          },
        },
      ]
    );
  };

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    dispatch(signUp(email, password));
  };

  return (
    <ImageBackground
      source={require("../../assets/img/BGLoginAndRegister.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Registro" titleStyle={styles.title} />
          <Card.Content>
            {/* <TextInput label="Nombre" style={styles.input} /> */}
            <TextInput
              label="Correo electrónico"
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              label="Contraseña"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
              onPress={handleSignUp}
              style={styles.button}
            >
              Registrarse
            </Button>
            <Button
              mode="contained"
              onPress={handleIniciarSesion}
              style={styles.button}
            >
              Iniciar Sesión
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
