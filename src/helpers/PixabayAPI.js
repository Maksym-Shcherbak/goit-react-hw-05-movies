import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = (query, page) => {
  const KEY = '39344710-8effa9f65cae25b1f597b248fffbed32';
  const options = {
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  };
  const searchParams = new URLSearchParams(options);
  return axios.get(`?q=${query}&key=${KEY}&page=${page}&${searchParams}`);
};
