// ТУт мають бути усі запити на сервер.
import axios from 'axios';

async function getArtists(page = 1, limit = 8) {
  const baseURL = 'https://sound-wave.b.goit.study/api';
  const endPoint = '/artists';
  const url = baseURL + endPoint;

  const params = {
    limit,
    page,
  };

  try {
    const res = await axios.get(url, { params });
    return res.data.artists;
  } catch (error) {
    console.error('Failed to fetch artists:', error);
    return [];
  }
}

async function getArtistCard(id) {
  const baseURL = 'https://sound-wave.b.goit.study/api';
  const endPoint = `/artists/${id}`;
  const url = baseURL + endPoint;

  const params = {
    id,
  };

  const res = await axios.get(url, { params });
  return res.data;
}

async function getFeedback(page = 1, limit = 1) {
  const baseURL = 'https://sound-wave.b.goit.study/api';
  const endPoint = '/feedbacks';
  const url = baseURL + endPoint;

  const params = {
    page,
    limit,
  };

  try {
    const res = await axios.get(url, { params });
    return res.data;
  } catch (error) {
    console.error('Failed to fetch feedbacks:', error);
    return { data: [], total: 0, page, limit };
  }
}
