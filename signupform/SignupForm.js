/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text , ImageBackground} from 'react-native';
import backgroundImage from '../img/2237e97bc7bb4c9fbe6b5b832b4f9674.jpg';
import { styles } from '../sharedStyles/SharedStyles';
import {useNavigation} from '@react-navigation/native';

const SignupForm = () => {
    const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic
    navigation.navigate('Intelcode');
  };

  const handleForgotPassword = () => {
    // Perform forgot password logic
    console.log('Forgot Password');
  };

  return (
  <ImageBackground   source={backgroundImage}
  style={styles.container} >
     <View style={styles.content}>
        <Text style={styles.heading}>Welcome back</Text>
    <View style={styles.parent_view}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Submit" onPress={handleSignup} />
      <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
        Forgot Password?
      </Text>
    </View>
    </View>
    </ImageBackground>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   input: {
//     borderRadius:10,
//     border:'cyan',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   forgotPassword: {
//     textAlign: 'right',
//     marginTop: 10,
//     color: '#7EC8E3',
//   },
// });

export default SignupForm;
