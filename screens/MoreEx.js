import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default class MoreEx extends Component{
render(){
    return(
        <View>
            <Text style={styles.textStyle} > India </Text>
        </View>
    )
}
}
const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
      },
    
})
