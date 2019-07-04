import React from 'react';
import { View, SafeAreaView, Image } from 'react-native';

function Header(props) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')} 
                />
            </SafeAreaView>
         </View>
    );  
}

const styles = {
    logo: {
      width: 80,
      height: 26,
      resizeMode: 'contain'
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    }
  } 

export default Header;
