const API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';
const BASE = 'https://api.nasa.gov/neo/rest/v1';

function urlFeed(startDate, endDate) {
  return `${BASE}/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;
}

function urlNeo(id) {
  return `${BASE}/neo/${id}?api_key=${API_KEY}`;
}

function mapFeedToArray(data) {
  if (!data || !data.near_earth_objects) return [];
  return Object.values(data.near_earth_objects).flat();
}

export const ServicioNasa = {
  urlFeed,
  urlNeo,
  mapFeedToArray
};


