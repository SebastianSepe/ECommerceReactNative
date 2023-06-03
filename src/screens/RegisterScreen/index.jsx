import {Text, View, TextInput} from 'react-native'
import React from 'react'
import styles from './styles'

const RegisterScreen = () => {
  return (
    <View>
      <Text>RegisterScreen</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} keyboardType='Email-Address' autoCapitalize='none'
      />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} secureTextEntry={true} autoCapitalize='none' />
    </View>
  )
}

export default RegisterScreen

