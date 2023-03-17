import axios from "axios";
export const fetchMainPage = (url: string, cookie: string) => {
  return axios.get(url, {
    headers: {
      referer: "https://tickets.rugbyworldcup.com/fr",
      "referrer-policy": "strict-origin-when-cross-origin",
      cookie,
    },
    method: "GET",
  });
};
