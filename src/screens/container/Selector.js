import React, { Component } from 'react';
import { connect } from 'react-redux'

import Loading from '../../sections/components/Loading';

class Selector extends Component {
    componentDidMount() {
        if(this.props.user) {
            this.props.navigation.navigate('App')
        }
        else {
            this.props.navigation.navigate('Login')
        }
    }
    
    render() {
        return (
            <Loading />
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.UserReducer
    }
}

export default connect(mapStateToProps)(Selector)

