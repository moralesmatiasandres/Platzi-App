import React, { Component } from 'react'
import moment from 'moment';

import {
    StyleSheet,
    ActivityIndicator,
    Text,
  } from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/Layout';
import ControlLayout from '../components/ControlLayout';
import PlayPause from '../components/PlayPause';
import FullScreen from '../components/FullScreen';
import ProgressBar from '../components/ProgressBar';

class Player extends Component {
    state = {
        loading: true,
        paused: false,
        videoDuration: 0,
        currentTime: 0
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
          loading: isBuffering
        })
    }
    onLoad = (payload) => {
        this.setState({ loading: false, videoDuration: payload.duration })
    }
    onProgress = (payload) => {
        this.setState({ currentTime: payload.currentTime })
    }
    playPause = () => {
        this.setState({
          paused: !this.state.paused
        })
    }
    onFullScreen = () => {
        this.player.presentFullscreenPlayer();
    }
    onChangeFinished = payload => {
        this.player.seek(payload)
        this.setState({ paused: false, loading: false })
      }
    
      onChangeStarted = payload => {
        this.setState({ paused: true, loading: true })
    }

    render() {
        let currentTime = moment(this.state.currentTime * 1000).format('mm:ss')
        let totalTime = moment(this.state.videoDuration * 1000).format('mm:ss')
        return(
            <Layout
                loading={this.state.loading}
                video={
                    <Video
                        ref={(ref) => {
                            this.player = ref
                        }}
                        onProgress={this.onProgress}
                        onLoad={this.onLoad}
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
                      <ProgressBar
                            onChangeFinished={this.onChangeFinished}
                            onChangeStarted={this.onChangeStarted} 
                            progress={this.state.currentTime} 
                            videoDuration={this.state.videoDuration} 
                     />
                      <Text style={styles.progressTime}>{currentTime} / {totalTime}</Text>
                      <FullScreen onFullScreen={this.onFullScreen} />
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
    },
    progressTime: {
        color: 'white',
        fontSize: 10,
        marginLeft: 5
    }
}

export default  Player;
