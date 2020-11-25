const axios = require("axios");
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.xane.ai/r1"
    : "https://dev.xane.ai";

const headers = {
  "x-origin": "4",
  "x-version": "1",
};

export const requestApi = async (resourcePath, method, params) => {
  const url = API_URL + resourcePath;
  headers["x-auth"] = await localStorage.getItem("x-auth");
  if (["POST", "PUT", "DELETE"].indexOf(method) > -1 && params) {
    let response = await axios({ url, method, data: params, headers });
    return response.data;
  } else {
    let response = await axios({ url, method, headers });
    if (response.data.error) {
      throw response.data;
    }
    return response.data;
  }
};
