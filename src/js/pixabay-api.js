const API_KEY = '44081515-c4a529d06247cd72f265dbdd7';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;

import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

export const fetchPhotos = async (query, photosCurrentPage = 1) => {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: PER_PAGE,
      page: photosCurrentPage,
    },
  });

  return response.data;
};
