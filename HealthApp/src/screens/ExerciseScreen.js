import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExerciseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rutina de Ejercicios</Text>
  
      <Text style={styles.exerciseText}>Ejercicio A</Text>
      <Text style={styles.exerciseText}>Ejercicio B</Text>
      <Text style={styles.exerciseText}>Ejercicio C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ExerciseScreen;
