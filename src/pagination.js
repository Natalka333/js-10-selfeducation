import './css/common.css'
import NewsApiService from './API-service';

const formEl = document.querySelector('.form-js');
const btnLoad = document.querySelector('.btn-load');
const container = document.querySelector('.article-container');


const newsApiService = new NewsApiService();
console.log(newsApiService)

formEl.addEventListener('submit', onSearch);
btnLoad.addEventListener('click', onLoadBtn)


function onSearch(e) {
    e.preventDefault();

    clearArticlesContainer();

    newsApiService.query = e.currentTarget.elements.query.value;

    if (newsApiService.query === '') {
        return alert('Введите запрос!')
    };

    // console.log(searchQuery);
    newsApiService.resetPage();
    newsApiService.fetchArticles().then(articles => console.log(articles));

};

function onLoadBtn() {
    newsApiService.fetchArticles().then(articles => console.log(articles));
};


function clearArticlesContainer() {
    container.innerHTML = '';
}
function addArticlesContainerMurkup(articles) {
    const murkup = articles.map((article) => {
        return `
        <li>
        <a href='${article.url}'>
        <article>
        <img src='${article.urlToImage}' alt='' width='480'>
        <h2>${article.title}</h2>
        <p>Posted by: ${article.author}</p>
        <p>${article.description}</p>
        </article>
        </a>
        </li>`

    }).join('');

    container.insertAdjacentHTML('beforeend', murkup);
}
