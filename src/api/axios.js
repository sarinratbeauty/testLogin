import axios from "axios";

const authUser = "panda-dev-auth-client";
const authPass =
  "ZCuuZzRzyfWEKNL7uQEQhggiGdbrGuMNLCKDKKKvogPfkEgeEokYfnwMFHwcmjKb";
const token = Buffer.from(`${authUser}:${authPass}`, "utf8").toString("base64");

const createInstance = (headers) => {
  return axios.create({
    baseURL: "http://68.183.178.206:8081",
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": null,
      "X-Requested-With": null,
      "Access-Control-Allow-Credentials": true,
    },
  });
};

const handleResponse = (res) =>
  !res.data.error ? Promise.resolve(res) : Promise.reject(new Error(res));

const catchError = (err) => Promise.reject(err.message);

export default {
  get: (path, headers = {}) => (
    createInstance(headers)
      .get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    createInstance(headers)
      .request({
        url: path,
        method: 'POST',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}, headers = {}) => (
    createInstance(headers)
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  )
}
