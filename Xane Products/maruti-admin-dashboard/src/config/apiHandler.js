const axios = require("axios");
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.vision.tdc.assist.marutisuzuki.com"
    : "https://api.vision.tdc.assist.marutisuzuki.com/dev";

const headers = {
  "x-device-id": " mtdc.vision.analytics",
  "x-auth": "mtdc.vision.analytics.token",

  "x-platform": 1,
  "x-origin": 3,
  "x-version": 1,
};

export const requestApi = async (resourcePath, method, params) => {
  const url = API_URL + resourcePath;
  // headers["x-auth"] = await localStorage.getItem("x-auth");
  if (["POST", "PUT", "DELETE"].indexOf(method) > -1 && params) {
    let response = await axios({ url, method, data: params, headers });
    return response.data;
  } else {
    let response = await axios({ url, method, headers });
    return response.data;
  }
};
