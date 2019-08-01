import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieLayout from '../components/MovieLayout';
import Player from '../../player/container/Player'
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';
import Details from '../../videos/components/Details';

class Movie extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <Header>
                    <Close
                        onPress={() => {navigation.goBack()}
                        }
                    />
                </Header>
            )
        }
    }
    
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
                <Player />
                <Details {...this.props.movie} />
            </MovieLayout>
        )
    }
}

function mapStateToProps(state) {
    return{
        movie: state.VideoReducer.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie);