import * as fetch from "node-fetch";

export const submitForm = (url: string, cookie: string, body: string) =>
  fetch(url, {
    headers: {
      accept: "application/json, text/javascript, */*; q=0.01",
      "accept-language":
        "fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6,es;q=0.5",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "referrer-policy": "strict-origin-when-cross-origin",
      "sec-ch-ua":
        '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      cookie: cookie,
      Referer: "https://tickets.rugbyworldcup.com/fr",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: body,
    method: "POST",
  });
