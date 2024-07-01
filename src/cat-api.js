import axios from "axios";

const API_KEY = 'live_SsyLsq9c0iZzswQWYMiVCV2jMEt8TTOJ33YyJn2WWd4q1FZuuXYgseQ7iYy5rlQ4';
const BACE_URL = ' https://api.thecatapi.com/v1';

axios.defaults.headers.common["x-api-key"] = API_KEY;

export function fetchBreeds(breeds) {
    return axios.get(`${BACE_URL}/breeds`).then(response => response.data)
}

export function fetchCatByBreed(breedId) {
    return axios.get(`${BACE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => {
        return response.data;
        // console.log(response.data);
    })
    .then(([data]) => {
        if (data.length === 0) {
            throw new Error(response.status);
        }
        return {
            url: data.url,
            id: data.id,
            name: data.breeds[0].name,
            description: data.breeds[0].description,
            temperament: data.breeds[0].temperament,
            origin: data.breeds[0].origin,
        }
    });
};