import { pageToFormBody } from "./page-handler/page-to-form-body";
import * as fs from "fs";
const querystring = require("querystring");
import { refreshToken } from "./utils/refresh-token";

export const cookie =
  "SSESSd01ad0e956e3c977e4fabd0c735f147f=b2nXuxciV7y2klmrZnR256v6Dt0%2Czo-yjqNTyAduGhoo6k3Z;";
const url = "https://tickets.rugbyworldcup.com/fr/revente_france_namibie";

import Fastify from "fastify";
import { submitForm } from "./page-handler/submitForm";
import { fetchMainPage } from "./page-handler/fetch-main-page";
import { ping, refreshTokenPeriodically } from "./utils/refresh-token";
const fastify = Fastify({
  logger: true,
});

refreshToken(cookie)();

const main = async (url: string) => {
  try {
    const initialPage = (await fetchMainPage(url, cookie)).data;
    console.log("initial page fetched");
    fs.writeFileSync("log.html", initialPage);
    const formData = pageToFormBody(initialPage);
    console.log("formData extracted");
    console.log(formData);

    const formDataQueryString = querystring.stringify(formData);
    console.log(formDataQueryString);
    const result = await submitForm(url, cookie, formDataQueryString);
    console.log("---- Result received -----");
    console.log("Status: ", result.status);
    console.log(result);
    const textReponse = result.data;
    console.log("textReponse:", textReponse);
  } catch (err) {
    console.log(err);
  }
};

// Declare a route
fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

fastify.post("/", async function (request, reply) {
  console.log("date", new Date());
  //@ts-ignore
  const message = request.body.message;
  console.log("Message:", message);
  const url = message.match(/#source:(.+)#/)[1];
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

refreshTokenPeriodically();
ping();
