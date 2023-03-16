import { noSelectionPageToBody } from "./page-handler/page-to-form-body";
import * as fs from "fs";

const cookie =
  "SSESSd01ad0e956e3c977e4fabd0c735f147f=uN9K4PFY5ZrjjQsnfz45t1PJ8LpJ4VlXvPL%2CcgzanMfk4CTB";
const url = "https://tickets.rugbyworldcup.com/fr/revente_france_namibie";

import Fastify from "fastify";
import { submitForm } from "./page-handler/submitForm";
import { fetchMainPage } from "./page-handler/fetch-main-page";
const fastify = Fastify({
  logger: true,
});

const main = async (url: string) => {
    try {  const initialPage = await (await fetchMainPage(url, cookie)).text();
        console.log("initial page fetched");
        fs.writeFileSync("log.html", initialPage);
        const body = noSelectionPageToBody(initialPage);
        console.log(body);
        const querystring = require("querystring");
      
        let queryString = querystring.stringify(body);
        const result = await submitForm(url, cookie, queryString);
        console.log(await result.text());
    }
    catch(err) {
        console.log(err)
    }

};

// Declare a route
fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

fastify.post("/", async function (request, reply) {
    console.log("date", new Date())
  const message = request.body.message;
  console.log("Message:", message);
  const url = message.match(/#(.+)#/)[1];
  console.log("URL:", url);
  await main(url);
  reply.send({ url });
});

// Run the server!
fastify.listen({ port: 5002 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
