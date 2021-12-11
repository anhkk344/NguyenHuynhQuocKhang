import axios from 'axios';

const URL = 'http://localhost:9090';
export const fetchPosts = () => axios.get(`${URL}/post`);
export const createPost = (payload) => axios.post(`${URL}/insert`, payload);
export const updatePost = (payload) => axios.post(`${URL}/update`, payload);
export const deleteByID = (payload) => axios.post(`${URL}/delete`, payload);

