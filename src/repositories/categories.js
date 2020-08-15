import config from '../config';

const CATEGORIES_URL = `${config.SERVER_URL}categories`;

function getAllCategories() {
    return fetch(`${CATEGORIES_URL}`)
        .then(async (response) => {
            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('Error loading data');
      });
}

function getAllCategoriesWithVideos() {
    return fetch(`${CATEGORIES_URL}?_embed=videos`)
        .then(async (response) => {
            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('Error loading data');
      });
}

  export default {
      getAllCategories,
      getAllCategoriesWithVideos,
    };