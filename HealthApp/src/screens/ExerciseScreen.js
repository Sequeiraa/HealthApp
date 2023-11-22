import React, { useState } from 'react';
import { Button, FlatList } from 'react-native';

function ExerciseRoutineScreen() {
  const [routines, setRoutines] = useState([
    { name: 'Rutina 1', description: 'Descripción' },
    { name: 'Rutina 2', description: 'Descripción' },
    // Más rutinas...
  ]);

  const handleSelectRoutine = (routine) => {
    // Lógica para seleccionar una rutina
  };

  return (
    <FlatList
      data={routines}
      renderItem={({ item }) => (
        <Button title={item.name} onPress={() => handleSelectRoutine(item)} />
      )}
      keyExtractor={item => item.name}
    />
  );
}

export default ExerciseRoutineScreen;
