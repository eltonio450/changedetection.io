import ngrok from "ngrok";

ngrok.disconnect().then(() => ngrok.connect({subdomain: "ovr", "authtoken": "2N6aWc1uKQWuXGIGD8hrs7cvcaZ_7dEmMYKUZgkguWevwR2NZ", addr: 5002})).then(console.log);
