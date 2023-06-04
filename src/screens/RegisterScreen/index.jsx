import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize='none'
      />
    </View>
  );
};

export default RegisterScreen;
