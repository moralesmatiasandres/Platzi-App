import React from 'react';
import { View, Text } from 'react-native';

function Layout(props) {
    return(
        <View style={styles.container}>
            <View style={styles.video}>
                {props.video}
            </View>
        </View>
    )
}

const styles = {
    container: {
        paddingTop: '56.25%',     
    },

    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'black',      
        }
    }


export default Layout;