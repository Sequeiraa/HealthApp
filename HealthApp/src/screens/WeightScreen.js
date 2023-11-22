import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';

function WeightControlScreen() {
  const [weight, setWeight] = useState('');

  const handleSave = () => {
    
  };

  return (
    <>
      <Input placeholder="Peso actual" onChangeText={setWeight} />
      <Button title="Guardar" onPress={handleSave} />
      
    </>
  );
}

export default WeightControlScreen;
