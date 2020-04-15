import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    list: state.categoryList,
  };
}

class CategoryList extends Component {
  keyExtractor = (item) => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias :(" />;
  itemSerator = () => <Separator color="red"/>;
  renderItem = ({item}) => {
    return <Category {...item} />;
  };

  render() {
    return (
      <Layout title="Categorias">
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