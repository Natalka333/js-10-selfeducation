import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { murkUpAllBreed } from './render-breeds';


const selectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const catInfoEl = document.querySelector('.cat-info');


const renderFeachBreeds = () => {
    loaderEl.classList.remove('unvisible');

    fetchBreeds()
    .then(breeds => {
        const optionEl = breeds
        .map(({ name, id }) => {
            return `<option value='${id}'>${name}</option>`;

        })
        .join('');
        // console.log(breeds);
        selectEl.insertAdjacentHTML('beforeend', optionEl);
        new SlimSelect({
            select: '.breed-select'
        })
    })
    .catch(error => {
        console.log(error);
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(() => {
        loaderEl.classList.add('unvisible');
        selectEl.classList.remove('unvisible');
    });
};


selectEl.addEventListener('change', onChangeSelectBreeds);

renderFeachBreeds();

function onChangeSelectBreeds(event) {
    const breedId = event.target.value;
    // console.log(breedId);
    loaderEl.classList.remove('unvisible');
    fetchCatByBreed(breedId)
    .then(({ id, url, name, description, origin, temperament }) => {
        console.log('breedId', breedId);
        catInfoEl.innerHTML = '';
        loaderEl.classList.remove('unvisible');
        catInfoEl.insertAdjacentHTML('beforeend', murkUpAllBreed({ id, url, name, description, origin, temperament })
    )
    }).catch(error => {
        console.log(error);
        catInfoEl.innerHTML = '';
        Notiflix.Notify.failure('There is not information about this cat');
    }).finally(() => {
        loaderEl.classList.add('unvisible');
    });
};