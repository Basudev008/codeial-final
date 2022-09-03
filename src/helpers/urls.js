const API_root = 'https://codeial.codingninjas.com:8000/api/v2';

export const APIUrls = {
  login: () => `${API_root}/users/login`,
  signup: () => `${API_root}/users/login`,
  fetchPosts: (page = 1, limit = 5) =>
    `${API_root}/posts?page=${page}&limit=${limit}`,
};
