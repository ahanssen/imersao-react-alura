const SERVER_URL = window.location.hostname.includes('localhost')
    ? "http://localhost:8080/"
    : 'https://astronomy-flix.herokuapp.com/';

    export default {
        SERVER_URL,
    }