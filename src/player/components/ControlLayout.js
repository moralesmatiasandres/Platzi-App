import React from 'react';
import { View } from 'react-native';

function ControlLayout (props) {
    return (
        <View style={styles.container}>
           {props.children}
        </View>
    )
}

const styles = {
    container: {
        backgroundColor: 'rgba(0,0,0,.5)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 35,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
    }
}

export default ControlLayout;