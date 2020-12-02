const API_KEY = '3247cb046b5f50419695d648556acfa9';

const myApp = new Vue({
    el: '#root',
    data: {
        movies: [],
        userSrcInput: "",
        path: 'https://image.tmdb.org/t/p/w500',
    },
    methods: {
        search: function() {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        'api_key': API_KEY,
                        query: this.userSrcInput
                    }
                })
                .then(r => this.movies = r.data.results)
        }
    },
})