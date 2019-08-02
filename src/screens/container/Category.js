import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'

import Layout from '../../videos/components/SuggestionListLayout';
import Empty from '../../videos/components/Empty';
import Separator from '../../sections/components/VerticalSeparator';
import Suggestion from '../../videos/components/Suggestion';
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';


class Category extends Component {
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
            <Layout title={`${this.props.navigation.getParam('genre', 'Categoria')}`}>
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
        list: state.VideoReducer.categoryList
    }
}

export default connect(mapStateToProps)(Category);