import React from 'react';
import {
     TouchableHighlight,
     TouchableOpacity,
     TouchableWithoutFeedback,
     Text,
 } from 'react-native';

function PlayPause (props) {
    return (
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.container}
            underlayColor="red"
            hitSlop={{
                left: 5,
                top: 5,
                bottom: 5,
                right: 5,
            }}
        >
            {
                props.paused ?
                <Text style={styles.button}>Play</Text>
                :
                <Text style={styles.button}>Pause</Text>
            }
        </TouchableHighlight>
    )
}

const styles = {
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray',
    },

    button: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    }
}

export default PlayPause;