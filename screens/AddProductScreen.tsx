// AddProductScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { ref, set } from "firebase/database";
import { db } from '../config/Config';

const AddProductScreen = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleAddProduct = () => {
    if (productName && productDescription && productPrice && productCategory) {
      const newProduct = {
        name: productName,
        description: productDescription,
        price: productPrice,
        category: productCategory,
      };

      // Guardar el nuevo producto en Firebase
      set(ref(db, 'products/' + productName), newProduct)
        .then(() => {
          Alert.alert('Éxito', 'El producto se ha agregado correctamente');
          setProductName('');
          setProductDescription('');
          setProductPrice('');
          setProductCategory('');
        })
        .catch((error) => {
          Alert.alert('Error', 'No se pudo agregar el producto: ' + error.message);
        });

    } else {
      Alert.alert('Error', 'Todos los campos son obligatorios');
    }
  };

  return (
    <View style={styles.container}>
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
      <Button title="Agregar Producto" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});

export default AddProductScreen;
