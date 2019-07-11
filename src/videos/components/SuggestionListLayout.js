import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SuggestionListLayout(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    )
}

const styles = {
    container: {
        paddingVertical: 10,
        flex: 1,
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeigth: 'bold',
        marginLeft: 8
    }
}

export default SuggestionListLayout;
