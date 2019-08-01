import React, { Component, Fragment } from 'react';
import {  } from 'react-native'
import { connect } from 'react-redux';

import Header from '../../sections/components/Header'
import SuggestionList from '../../videos/container/SuggestionList'
import CategoryList from '../../videos/container/CategoryList';
import API from '../../../utils/Api';
import Movie from '../../screens/container/Movie';
import Search from '../../sections/container/Search';

class Home extends Component {
    static navigationOptions = () => {
        return {
            header: Header,
        }
    }
    
    async componentDidMount() {
        const categoryList = await API.getMovies();
        console.log(categoryList);
        this.props.dispatch({
          type: 'SET_CATEGORIES_LIST',
          payload: {
            categoryList
          }
        })
   
       const suggestionList = await API.getSuggestion(10);
       console.log(suggestionList)
       this.props.dispatch({
         type: 'SET_SUGGESTION_LIST',
         payload: {
           suggestionList
         }
       })
    }
    render() {
        return (
            <Fragment>
                <Search />
                <CategoryList />
                <SuggestionList />
            </Fragment>
        )
    }
}

export default connect(null)(Home);

