const fetch = require('node-fetch');

const promise = fetch("https://tickets.rugbyworldcup.com/fr/revente_france_uruguay", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6,es;q=0.5",
    "cache-control": "max-age=0",
    "referrer-policy": "strict-origin-when-cross-origin",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "referer": "https://tickets.rugbyworldcup.com/fr",
    "referrer-policy": "strict-origin-when-cross-origin",
    "cookie": "SSESSd01ad0e956e3c977e4fabd0c735f147f=M4aodvR8cJn1SKaRbkDF9tPQ3tlj6VLYbaj3TKURjnz5nYe3;"

  },
  "referrer": "https://tickets.rugbyworldcup.com/fr",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
  
promise.then(console.log)

promise.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error(error));

