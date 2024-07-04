import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Personaje from '../components/Personaje'



export default function ListaScreenDos() {

const API_PRODUCTOS = "https://fakestoreapi.com/products"
const [data, setData] = useState([])

    useEffect(() => {
        fetch(API_PRODUCTOS)
        .then(response => response.json())
        .then(datos => setData(datos))
    
        console.log(data);
    
    }, []) 

    function mensaje(cartoon:Producto){
        Alert.alert("Mensaje", `Precio: ${cartoon.price} \n Categoria: ${cartoon.category}`)
    }


    interface Producto{
        title: string,
        image: string,
        price: String,
        category: String
    }

return (
    <View style={styles.container}>
    <Text>ListaScreen</Text>
    <FlatList
        data={data}
        renderItem={({item}: {item:Producto}) => 
    <Personaje data={item}/>
        }
    />
    </View>
)
}

const styles = StyleSheet.create({
    img: {
        width: 80,
        height: 80
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        textAlign: "center",
    }
})