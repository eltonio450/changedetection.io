const fetch = require('node-fetch');

const promise = fetch("https://tickets.rugbyworldcup.com/fr/revente_france_uruguay", {
  "headers": {
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

