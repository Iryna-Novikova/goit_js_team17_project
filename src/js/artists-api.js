// ТУт мають бути усі запити на сервер.
import axios from 'axios';

axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';

export async function getArtists(page = 1, limit = 8) {
  const endPoint = '/artists';

  const params = {
    limit,
    page,
  };

  const res = await axios.get(endPoint, { params });
  return res.data;
}

export async function getArtistCard(id) {
  const endPoint = `/artists/${id}`;

  const params = {
    id,
  };

  const res = await axios.get(endPoint, { params });
  return res.data;
}

export async function getFeedback(page = 1, limit = 1) {
  const endPoint = '/feedbacks';

  const params = {
    page,
    limit,
  };

  const res = await axios.get(endPoint, { params });
  return res.data;
}

export async function postFeedback({ name, rating, descr }) {
  const endPoint = '/feedbacks';

  const headers = {
    'Content-Type': 'application/json',
  };

  const body = {
    name,
    rating,
    descr,
  };

  const res = await axios.post(endPoint, body, { headers });
  return res.data;
}
