import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';

function HealthStatusScreen() {
  const [bloodPressure, setBloodPressure] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');

  const handleSave = () => {
    // Lógica para guardar los datos
  };

  return (
    <>
      <Input placeholder="Presión arterial" onChangeText={setBloodPressure} />
      <Input placeholder="Nivel de azúcar en sangre" onChangeText={setBloodSugar} />
      <Button title="Guardar" onPress={handleSave} />
    </>
  );
}

export default HealthStatusScreen;
