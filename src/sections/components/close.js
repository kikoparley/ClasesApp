import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

function Close(props) {
    return (
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Text style={styles.buttom}>X</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttom:{
        fontWeight:'bold',
        color:'white'
    },
    container: {
        backgroundColor: '#14b739',
        borderRadius:12,
        width:25,
        height:25,
        overflow:'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Close