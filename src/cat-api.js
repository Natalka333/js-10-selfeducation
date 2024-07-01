import axios from "axios";
const API_KEY = 'live_SsyLsq9c0iZzswQWYMiVCV2jMEt8TTOJ33YyJn2WWd4q1FZuuXYgseQ7iYy5rlQ4';
const BACE_URL = ' https://api.thecatapi.com/v1';

axios.defaults.headers.common["x-api-key"] = API_KEY;

export function fetchBreeds(breeds) {
    return axios.get(`${BACE_URL}/breeds`).then(response => response.data)
}