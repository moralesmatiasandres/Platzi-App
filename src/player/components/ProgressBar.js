import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';

function ProgressBar (props) {
    return (
        <View>
            <Slider
                maximumValue={props.videoDuration}
                minimumValue={0}
                onSlidingStart={props.onChangeStarted}
                onSlidingComplete={props.onChangeFinished}
                value={props.progress}
                step={1}
                trackStyle={styles.trackStyle}
                thumbStyle={styles.thumbStyle}
                maximumTrackTintColor="rgba(255, 255, 255, .40)"
                minimumTrackTintColor='#98ca3f'
                thumbTintColor='white' 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    thumbStyle: {
      width: 4,
      height: 30,
      borderRadius: 0,
      backgroundColor: 'white',
      flex: 1,
    },
    trackStyle: {
      height: 30,
      width: 200,
      borderRadius: 0,
      flex: 1,
    }
  })

export default ProgressBar;