import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import RegisterScreen from "../RegisterScreen";
import LoginScreen from "../LoginScreen";

const AuthScreen = () => {
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const handleMostrarLogin = () => {
    setMostrarLogin(true);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.authScreen}>
      {mostrarLogin ? <LoginScreen /> : <RegisterScreen />}
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
