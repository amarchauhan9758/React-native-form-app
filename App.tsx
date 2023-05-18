import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './login_page/Login';
import Dashboard from './databoard/Dashboard';
import SignupForm from './signupform/SignupForm';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intelcode" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Sign Up" component={SignupForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
