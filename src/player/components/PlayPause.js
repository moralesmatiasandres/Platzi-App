import React from 'react';
import {
     TouchableHighlight,
     TouchableOpacity,
     TouchableWithoutFeedback,
     Text,
 } from 'react-native';
 import Icon from 'react-native-vector-icons/Ionicons'

function PlayPause (props) {
    return (
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.container}
            underlayColor="rgba(255,255,255,.3)"
            hitSlop={{
                left: 5,
                top: 5,
                bottom: 5,
                right: 5,
            }}
        >
            {
                props.paused ? 
                <Icon 
                    size={20} 
                    color="#98ca3f" 
                    name={
                        Platform.OS === 'ios' ? 'ios-play' : 'md-play'
                    } 
                /> :
                <Icon 
                    size={20} 
                    color="#98ca3f" 
                    name={
                        Platform.OS === 'ios' ? 'ios-pause' : 'md-pause'
                    } 
                />
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