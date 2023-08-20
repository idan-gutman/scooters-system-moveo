import axios from 'axios';

const BACKEND_BASE_URL = 'http://localhost:3001/api';

const Backend = axios.create({ baseURL: BACKEND_BASE_URL });

const Client = {
  Backend,
};

export default Client;
