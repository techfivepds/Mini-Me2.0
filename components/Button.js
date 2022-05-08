import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Button = ({labelButton, onpress}) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={onpress}
            >
                <Text style={styles.textbutton}>{labelButton}</Text>
        </TouchableOpacity> 
    )
}

export default Button 

const styles = StyleSheet.create({
    button: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.40,
          shadowRadius: 2,
          elevation: 2,

        backgroundColor: '#fff',
        width: 116,
        height: 39,
        borderColor: '#BFDBEC',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',     
    },

    textbutton: {
        fontFamily: 'Poppins_700Bold',
        color: '#99AFBD'
      }

    
})