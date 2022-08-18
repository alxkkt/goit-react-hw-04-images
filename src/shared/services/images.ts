import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '27140133-cf6dd0795ec4c8135d19f929c',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getImages = async (q: string, page: number) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
    },
  });

  return data.hits;
};
