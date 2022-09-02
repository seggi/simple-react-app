import axios from "axios";

const { REACT_APP_URL_API } = process.env;
const contentType: {} = { "Content-Type": "application/json" };
const defaultUrls: {apiV1: any} = { apiV1: "/" };

const api = axios.create({
  baseURL: REACT_APP_URL_API,
  headers: contentType,
});

interface RequestOptions {
    method: string,
    api: any,
    body: any
}

const apiRequest = async (requestMethod: string, url: any, data: any = null) => {
  const requestOptions: RequestOptions = {
    api,
    method: requestMethod,
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${defaultUrls.apiV1}/${url}`, requestOptions);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export default apiRequest;