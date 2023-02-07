import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export const Task = props => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.text}>{props.item}</Text>
            <TouchableOpacity style={styles.button} onPress={props.remove}>
                <Text style={styles.text}>X</Text >
            </TouchableOpacity>
        </View>)
}

const styles = StyleSheet.create({
    taskContainer: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#0c1b24',
        borderRadius: 40,
        margin: 8,
        padding: 8
    },
    button: {
        elevation: 8,
        backgroundColor: "red",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 10,
        width: 39,
    },
    text: {
        fontSize: 14,
        color: 'white',
        width: '50%',
    },
})