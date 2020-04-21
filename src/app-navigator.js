import { createStackNavigator } from 'react-navigation';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie'
import Category from './screens/containers/category'
const Main = createStackNavigator(
{
  Home: Home,
  Movie: Movie,
  Category,
})



export default Main;
