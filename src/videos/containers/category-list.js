import React, {Component} from 'react';
import { NavigationActions } from "react-navigation";
import {View, FlatList} from 'react-native';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout';
import { connect } from 'react-redux';



function mapStateToProps(state) {
  return {
    list: state.videos.categoryList
  };
}

class CategoryList extends Component {
  keyExtractor = (item) => item.id.toString();
  renderEmpty = () => <Empty text='No hay sugerencias :(' />;
  itemSerator = () => <Separator color='red' />;
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
        onPress={() => {
          this.viewCategory(item) }}
      />
    );
  };

  render() {
    return (
      <Layout title='Areas'>
        <View>
          <FlatList
            horizontal
            keyExtractor={this.keyExtractor}
            data={this.props.list}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.itemSerator}
            renderItem={this.renderItem}
          />
        </View>
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(CategoryList);