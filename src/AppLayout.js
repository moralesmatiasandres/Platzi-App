import React, {Component} from 'react';
import { Text } from 'react-native'
import { connect } from 'react-redux';

import Home from './screens/container/Home'
import Header from './sections/components/Header'
import SuggestionList from './videos/container/SuggestionList'
import CategoryList from './videos/container/CategoryList';
import API from '../utils/Api';
import Movie from './screens/container/Movie';
import Search from './sections/container/Search';

class AppLayout extends Component {
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
        if(this.props.selectedMovie) {
          return <Movie />
        } else {
          return (
            <Home>
                  <Header />
                  <Search />
                  <CategoryList />
                  <SuggestionList />
            </Home>
          )
        }
    }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,

  }
}

export default connect(mapStateToProps)(AppLayout);