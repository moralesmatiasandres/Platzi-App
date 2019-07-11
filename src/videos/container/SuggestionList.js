import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator'
import Suggestion from '../components/Suggestion';


class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay sugerencias" />
    itemSeparator = () => <Separator />
    renderItem = ({ item }) => {
        return (
            <Suggestion {...item} />
        )
    }

    render() {
        const list = [
            {
                title: 'Matias',
                    key: '1'
            },
            {
                title: 'Luciana',
                key: '2'
            },
            {
                title: 'Lucjjjiana',
                key: '3'
            }
        ]
        return (
            <Layout title="Recomendado para ti">
                <FlatList
                    data={list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem} 
                />
            </Layout>
        )
    }
}

export default SuggestionList;