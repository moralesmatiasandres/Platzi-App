import React, { Component } from 'react';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/container/Player'
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';
import { connect } from 'react-redux';


class Movie extends Component {
    closeVideo = () => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null,
            }
        })
    }
    render() {
        return(
            <MovieLayout>
                <Header>
                    <Close
                        onPress={this.closeVideo}
                    />
                </Header>
                <Player />
            </MovieLayout>
        )
    }
}

// function mapStateToProps(props) {

// }

export default connect(null)(Movie);