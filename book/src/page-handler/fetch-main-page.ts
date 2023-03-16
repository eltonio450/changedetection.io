const fetch = require("node-fetch");

export const fetchMainPage = (url: string, cookie: string) => {
  return fetch(url, {
    headers: {
      referer: "https://tickets.rugbyworldcup.com/fr",
      "referrer-policy": "strict-origin-when-cross-origin",
      cookie,
    },
    referrer: "https://tickets.rugbyworldcup.com/fr",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  });
};
