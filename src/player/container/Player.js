import React, { Component } from 'react'
import {
    StyleSheet,
    ActivityIndicator,
    Text,
  } from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/Layout';
import ControlLayout from '../components/ControlLayout';
import PlayPause from '../components/PlayPause';

class Player extends Component {
    state = {
        loading: true,
        paused: false,
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
          loading: isBuffering
        })
    }
    playPause = () => {
        this.setState({
          paused: !this.state.paused
        })
    }

    render() {
        return(
            <Layout
                loading={this.state.loading}
                video={
                    <Video
                        source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                        style={styles.video}
                        onBuffer={this.onBuffer}
                        resizeMode="contain"
                        muted={true}
                        paused={this.state.paused}
                    />
                }
                loader={
                    <ActivityIndicator color="red" />
                }
                  controls={
                    <ControlLayout>
                      <PlayPause
                        onPress={this.playPause}
                        paused={this.state.paused}
                      />
                      <Text>progress bar | </Text>
                      <Text>time left | </Text>
                      <Text>fullscreen | </Text>
                    </ControlLayout>
                }
            />
        )
    }
}

const styles = {
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
}

export default  Player;
