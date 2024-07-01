import Notiflix from 'notiflix';
import { fetchBreeds } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';



const selectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const catInfoEl = document.querySelector('.cat-info');


function renderFeachBreeds() {
    fetchBreeds().then(breeds => {
        const optionEl = breeds.map(({ name, id }) => {
            return `<option ${id}>${name}</option>`;
        })
        selectEl.insertAdjacentHTML('beforeend', optionEl);
        new SlimSelect({
            select: 'breed-select'
        })
    }).catch(error => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
    }).finally(() => {

    })
}


