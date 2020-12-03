const API_KEY = '3247cb046b5f50419695d648556acfa9';

const myApp = new Vue({
    el: '#root',
    data: {
        // loader: false,
        movies: [],
        series: [],
        userSrcInput: "",
        searchType: "Scegli una tipologia..",
        path: 'https://image.tmdb.org/t/p/w500',
        stars: 2 /* to transform the vote from 1-10 to 1-5 */
    },
    methods: {
        searchMovies: function() {

        },
        searchSeries: function() {

        },
        calcStars(index, n) {
            return index <= Math.ceil(n / this.stars) ? 'fas fa-star' : 'far fa-star';
        },
        selectType() {
            if (this.searchType === 'films') {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                        params: {
                            'api_key': API_KEY,
                            query: this.userSrcInput
                        }
                    })
                    .then(r => this.movies = r.data.results)
            } else if (this.searchType === 'series') {
                axios.get('https://api.themoviedb.org/3/search/tv', {
                        params: {
                            'api_key': API_KEY,
                            query: this.userSrcInput
                        }
                    })
                    .then(r => this.movies = r.data.results)
            }
        }
        //     loaderTimeout() {
        //         setTimeout(function() { this.loader = true; }, 3000);
        //     }
        // },
        // mounted() {
        //     this.loaderTimeout()
    },
})