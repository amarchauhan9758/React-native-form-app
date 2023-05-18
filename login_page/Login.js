/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
// eslint-disable-next-line prettier/prettier
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import backgroundImage from '../img/2237e97bc7bb4c9fbe6b5b832b4f9674.jpg';

import { styles } from './../sharedStyles/SharedStyles';

function Login() {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Perform further validation if needed
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, navigate to the Dashboard screen
      navigation.navigate('Dashboard');
    }

  };

  const isValidEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleForgotPassword = () => {
    navigation.navigate('Sign Up');

  };

  const handleSignUp = ()=>{
    navigation.navigate('Sign Up');
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Login Form</Text>
        <View style={styles.parent_view} >
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={text => handleChange('name', text)}
        />
        {errors.name && <Text style={styles.error}>{errors.name}</Text>}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={text => handleChange('email', text)}
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={formData.password}
          onChangeText={text => handleChange('password', text)}
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        <Button title="Submit" onPress={handleSubmit} />
        <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
        Forgot Password?
      </Text>
      <Text>
        Don't have account ?  <Text style={styles.forgotPassword} onPress={handleSignUp} >Sign Up</Text>
      </Text>
      </View>
      </View>
    </ImageBackground>
  );
}

export default Login;
