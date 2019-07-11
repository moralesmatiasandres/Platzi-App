import React from 'react';
import { View, Text } from 'react-native';
import { tsPropertySignature } from '@babel/types';

function Empty(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = {
    container: {
        padding: 10,
    },
    text: {
        fontSize: 16,
    }
}

export default Empty