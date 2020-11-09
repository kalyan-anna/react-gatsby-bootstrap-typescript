import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.SERVICE_BASE}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const load = async () => {
  const response = await API.get(`/api/ba5e9cda-688a-479b-bb08-e8878b44fd38`);
  return response.data.registrations;
};

export const registrationService = {
  load,
};
