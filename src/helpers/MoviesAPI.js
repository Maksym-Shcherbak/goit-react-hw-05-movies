import axios from 'axios';

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWZmYTlmNjVjYWUyNWIxZjU5N2IyNDhmZmZiZWQzMiIsInN1YiI6IjY1NGI2NjNhMWFjMjkyN2IyZGNmNzBiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wt2WcEuurlXNU4SFGIcSzLE3fb4Vg87kUc19yKbL2iA';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = API_KEY;

export const getMovies = time_window => {
  return axios.get(`/trending/movie/${time_window}`);
};

export const getMovieById = id => {
  return axios.get(`/movie/${id}`);
};

export const getCast = id => {
  return axios.get(`/movie/${id}/credits`);
};

export const getReviews = id => {
  return axios.get(`/movie/${id}/reviews`);
};

export const fetchMoviesBySearch = (query, page) => {
  return axios.get(`/search/movie?query=${query}&page=${page}`);
};
