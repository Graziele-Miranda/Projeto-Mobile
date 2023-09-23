import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Login from './src/screens/Login';
import NovaConta from './src/screens/NovaConta';
import RecuperarSenha from './src/screens/RecuperarSenha';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTintColor: '#573FBA',
          headerStyle: {backgroundColor: '#2B1D62'},
          headerTitleStyle: {
            fontFamily: 'AveriaLibre-Regular',
            color: '#FFFF',
            fontSize: 26,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Nova Conta" component={NovaConta} />
        <Stack.Screen name="Recuperação de Senha" component={RecuperarSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
