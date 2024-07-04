import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, FlatList, StyleSheet } from 'react-native';
import Informacion from './Informacion';

interface Record {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

const ShowRecordsScreen = () => {
  const [id, setId] = useState('');
  const [record, setRecord] = useState<Record | null>(null);
  const [records, setRecords] = useState<Record[]>([
    { id: '1', name: 'Producto 1', description: 'Descripción 1', price: '10', category: 'Categoría 1' },
    { id: '2', name: 'Producto 2', description: 'Descripción 2', price: '20', category: 'Categoría 2' },
    {id: '3', name: 'Producto 3', description: 'Descripción 3', price: '30', category: 'Categoría 3'}
  ]);



  const handleFetchRecordById = () => {
    const foundRecord = records.find(r => r.id === id);
    if (foundRecord) {
      setRecord(foundRecord);
    } else {
      Alert.alert('Error', 'Registro no encontrado');
    }
  };

  const handleAddRecord = () => {
    const newRecord: Record = {
      id: (records.length + 1).toString(),
      name: 'Nuevo Producto',
      description: 'Nueva Descripción',
      price: '30',
      category: 'Nueva Categoría'
    };
    setRecords([...records, newRecord]);
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Buscar por ID:</Text>
        <TextInput
          style={styles.input}
          value={id}
          onChangeText={setId}
        />
        <Button title="Buscar" onPress={handleFetchRecordById} />
        {record && (
          <View style={styles.record}>
            <Text>ID: {record.id}</Text>
            <Text>Nombre: {record.name}</Text>
            <Text>Descripción: {record.description}</Text>
            <Text>Precio: {record.price}</Text>
            <Text>Categoría: {record.category}</Text>
          </View>
        )}
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Lista de Registros:</Text>
        <FlatList
          data={records}
          renderItem={({ item }) => (
            <Informacion
              record={item}
              onPress={() => Alert.alert('Información', `ID: ${item.id}\nNombre: ${item.name}\nDescripción: ${item.description}\nPrecio: ${item.price}\nCategoría: ${item.category}`)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <Button title="Agregar Nuevo Registro" onPress={handleAddRecord} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
  },
  record: {
    marginTop: 10,
  },
});

export default ShowRecordsScreen;
