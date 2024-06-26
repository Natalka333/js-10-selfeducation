const API_KEY = '0bd27c01866f453fb86ca5c40830dd1c';
const BASE_URL = 'https://newsapi.org/v2';

const options = {
    headers: {
        'Authorization': API_KEY,
    },
};

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        // console.log('до запроса:', this);
        
        const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

        return fetch(url, options)
            .then(response => response.json())
            .then(({ articles }) => {

                this.incrementPage();
                // console.log('после запроса: ', this)
                return articles;
            });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}

