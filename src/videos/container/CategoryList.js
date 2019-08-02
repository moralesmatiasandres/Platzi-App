import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'

import Empty from '../components/Empty';
import Separator from '../../sections/components/HorizontalSeparator';
import Category from '../components/Category';
import Layout from '../components/CategoryListLayout';

class CategoryList extends Component {
    keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text="No hay sugerencias" />
    itemSeparator = () => <Separator />
    viewCategory = (item) => {
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Category',
                params: {
                    genre: item.genres[0]
                }
            })
        )
    }
    
    renderItem = ({ item }) => {
        return (
            <Category 
                {...item}
                onPress={() => { this.viewCategory(item) }} 
            />
        )
    }

    render() {
        return (
            <Layout title="Categorias">
                <FlatList
                    horizontal
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

export default connect(mapStateToProps)(CategoryList);