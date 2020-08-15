import config from '../config';

const VIDEOS_URL = `${config.SERVER_URL}videos`

function create(videoData) {
    return fetch(`${VIDEOS_URL}?embed=videos`,
    {method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
body: JSON.stringify(videoData)})
        .then(async (response) => {
            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('Error loading data');
      });
}

  export default {
      create,
    };