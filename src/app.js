import React, { Component } from 'react';

import { Text, View } from "react-native";
import API from "../utils/api";
import Home from "./screens/containers/home";
import Header from "./sections/components/header";
import SuggestionList from "./videos/containers/suggestion-list";
import CategoryList from "./videos/containers/category-list";
import Movie from './screens/containers/movie'


// import { store, persistor } from "../store ";
import { connect }  from 'react-redux';
class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: "SET_CATEGORY_LIST",
      payload: {
        categoryList,
      },
    });
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: "SET_SEGGESTION_LIST",
      payload: {
        suggestionList,
      },
    });
  }
  render() {
    if (this.props.selectedMovie){
        return <Movie />;
    } else 

    return (
      <Home>
        <Header />
     
        <Text>buscador</Text>
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}

function mapStateToProps(state){
    return{
    selectedMovie: state.selectedMovie}
}


export default connect(mapStateToProps) (AppLayout);