import { Alert, Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Personaje(props: any) {
    console.log(props.data);

    const [visible, setvisible] = useState(true)

    function Informacion(item: any) {
        Alert.alert("Informacion", item.description)
    }

    return (
        <View>
            <TouchableOpacity onPress={() => setvisible(!visible)}>
                <Text>{props.data.price}</Text>
                <Image source={{ uri: props.data.image }} style={styles.img} />

                <Modal visible={visible}>
                    <Text>INFORMACION</Text>
                    <Image source={{ uri: props.data.image }} style={styles.img2} />
                    <Text>{props.data.description}</Text>
                    <Button title='regresar' onPress={() => setvisible(!visible)} />
                </Modal>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 200,
    },
    img2: {
        width: 90,
        height: 80,
    }
})