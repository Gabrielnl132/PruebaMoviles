import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface Record {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

const EditDeleteRecordScreen = () => {
  const [records, setRecords] = useState<Record[]>([
    { id: '1', name: 'Producto 1', description: 'Descripción 1', price: '10', category: 'Categoría 1' },
    { id: '2', name: 'Producto 2', description: 'Descripción 2', price: '20', category: 'Categoría 2' },
    // Más registros
  ]);
  const [selectedRecord, setSelectedRecord] = useState<Record | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleEditRecord = (record: Record) => {
    setSelectedRecord(record);
    setProductName(record.name);
    setProductDescription(record.description);
    setProductPrice(record.price);
    setProductCategory(record.category);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (selectedRecord) {
      const updatedRecords = records.map(r =>
        r.id === selectedRecord.id
          ? { ...r, name: productName, description: productDescription, price: productPrice, category: productCategory }
          : r
      );
      setRecords(updatedRecords);
      setIsEditing(false);
      Alert.alert('Éxito', 'El registro se ha editado correctamente');
    }
  };

  const handleDeleteRecord = (recordId: string) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que deseas eliminar este registro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: () => {
            const updatedRecords = records.filter(r => r.id !== recordId);
            setRecords(updatedRecords);
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        <View style={styles.form}>
          <Text style={styles.label}>Nombre del producto:</Text>
          <TextInput
            style={styles.input}
            value={productName}
            onChangeText={setProductName}
          />
          <Text style={styles.label}>Descripción:</Text>
          <TextInput
            style={styles.input}
            value={productDescription}
            onChangeText={setProductDescription}
          />
          <Text style={styles.label}>Precio:</Text>
          <TextInput
            style={styles.input}
            value={productPrice}
            onChangeText={setProductPrice}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Categoría:</Text>
          <TextInput
            style={styles.input}
            value={productCategory}
            onChangeText={setProductCategory}
          />
          <Button title="Guardar cambios" onPress={handleSaveEdit} />
        </View>
      ) : (
        <FlatList
          data={records}
          renderItem={({ item }) => (
            <View style={styles.record}>
              <Text>ID: {item.id}</Text>
              <Text>Nombre: {item.name}</Text>
              <Text>Descripción: {item.description}</Text>
              <Text>Precio: {item.price}</Text>
              <Text>Categoría: {item.category}</Text>
              <Button title="Editar" onPress={() => handleEditRecord(item)} />
              <Button title="Eliminar" onPress={() => handleDeleteRecord(item.id)} />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
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
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default EditDeleteRecordScreen;
