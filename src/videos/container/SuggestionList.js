import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'

import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../../sections/components/VerticalSeparator';
import Suggestion from '../components/Suggestion';


class SuggestionList extends Component {
    keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text="No hay sugerencias" />
    itemSeparator = () => <Separator />
    viewMovie = (item) => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item,
            }
        })
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Movie'
            })
        )
    }
    renderItem = ({ item }) => {
        return (
            <Suggestion
                {...item}
                onPress={() => { this.viewMovie(item) }} 
            />
        )
    }

    render() {
        return (
            <Layout title="Recomendado para ti">
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem} 
                />
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.VideoReducer.suggestionList
    }
}

export default connect(mapStateToProps)(SuggestionList);