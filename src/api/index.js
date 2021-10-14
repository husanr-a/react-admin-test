import request from './axios';

export function getData(data) {
  return request({
    url: "/users/octocat/gists",
    params: {
      data
    }
  })
}