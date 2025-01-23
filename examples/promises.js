import axios from 'axios';

const BASE_URL = 'https://httpbin.org';

export function successfullRequest() {
    return axios.get(`${BASE_URL}/status/200`);
}

export function failedRequest() {
    return axios.get(`${BASE_URL}/status/403`);
}

export function httpRequest(success) {
    return axios.get(`${BASE_URL}/status/${success ? 200 : 403}`);
}