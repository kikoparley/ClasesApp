const BASE_API ='https://yts.mx/api/v2/';


class Api{
    async getSuggestion(id){
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`)
          const { data } = await query.json();
        //   console.log(data);
          return data.movies
    }
    
    async getMovies() {
        const query = await fetch(`${BASE_API}list_movies.json?query_term={}`)
          const { data } = await query.json();
        //    console.log(data);
          return data.movies
    }
    async searchMovie(title){
        const query = await fetch(`${BASE_API}list_movies.json?`)
          const { data } = await query.json();
        //    console.log(data);
          return data.movies
    }
}


export default new Api();