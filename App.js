import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list'
//expo video
import Player from './src/player/containers/player';

type Props = {};
export default class App extends Component<Props> {
  state ={
    SuggestionList:[],
    categoryList:[]
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    // console.log(movies);
    // console.log(categories);
    this.setState({
      SuggestionList: movies,
      categoryList: categories,
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Player/>
        <Text>buscador</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.SuggestionList} />
      </Home>
    );
  }
}