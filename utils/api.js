//const BASE_API ='https://yts.mx/api/v2/';   //api vieja
// const BASE_API = "http://localhost:3000/";   // api nueva localhost
const BASE_API = "https://my-json-server.typicode.com/kikoparley/MyJsonServer/"; 

class Api {
  async getSuggestion(id) {
    const query = await fetch(`${BASE_API}data?id=${id}`);
    const { movies } = await query.json();
    return movies;
  }

  //   api vieja
  // async getSuggestion(id) {
  //   const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
  //   const { data } = await query.json();
  //   return data.movies;
  // }

  async getMovies() {
    const query = await fetch(`${BASE_API}data`);
    const { movies } = await query.json();
    return movies;
  }
  //   api vieja
  // async getMovies() {
  //   const query = await fetch(`${BASE_API}list_movies.json?`);
  //   const { data } = await query.json();
  //   return data.movies;
  // }

  async searchMovie(title) {
    const query = await fetch(`${BASE_API}data?limit=1&sort_by=rating&query_term=${title}`);
    const { movies } = await query.json();
    return movies;
  }

  //   api vieja
  // async searchMovie(title) {
  //   const query = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`);
  //   const { data } = await query.json();
  //   return data.movies;
  // }
}


export default new Api();