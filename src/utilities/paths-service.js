// src/utilities/paths-service.js

import sendRequest from './send-request';
const BASE_URL = '/api/paths';

export function createPath(pathData) {
  return sendRequest(BASE_URL, 'POST', pathData);
}

export function getPaths() {
  return sendRequest(BASE_URL, 'GET');
}
