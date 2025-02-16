import http from './axios';

export const getData = (url) => {
  return http.request({
    url: url,
    method: 'get'
  });
};