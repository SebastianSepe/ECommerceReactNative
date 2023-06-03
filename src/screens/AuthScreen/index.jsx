import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import RegisterScreen from "../RegisterScreen";

const AuthScreen = () => {
  const title = "Registro",
    message = "Ya tienes cuenta?",
    messageAction = 'Ingresar',
    messageTarget = 'Login'
    return (
        <KeyboardAvoidingView
        behavior="height"
        style={styles.AuthScreen}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                {/* <Text>Formulario</Text> */}
                <RegisterScreen />
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => console.log(messageTarget)}>
                        <Text style={styles.promptMessageAction}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
  );
};

export default AuthScreen;


