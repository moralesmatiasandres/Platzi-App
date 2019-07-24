import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieLayout from '../components/MovieLayout';
import Player from '../../player/container/Player'
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';
import Details from '../../videos/components/Details';

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
                <Details {...this.props.movie} />
            </MovieLayout>
        )
    }
}

function mapStateToProps(state) {
    return{
        movie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie);