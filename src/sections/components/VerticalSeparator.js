import React from 'react';
import { View } from 'react-native';

function VerticalSeparator(props) {
    return (
        <View style={[
            styles.separator,
            {
                borderTopColor: (props.color) ? props.color : '#eaeaea'
            }
        ]}>
        </View>
    )
}

const styles = {
    separator: {
        borderTopWidth: 1,

    }
}

export default VerticalSeparator;