import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HealthStatusScreen from './src/screens/HealthScreen';
import WeightControlScreen from './src/screens/ExerciseScreen';
import ExerciseRoutineScreen from './src/screens/HealthScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HealthStatus" component={HealthStatusScreen} />
        <Stack.Screen name="WeightControl" component={WeightControlScreen} />
        <Stack.Screen name="ExerciseRoutine" component={ExerciseRoutineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
