import { pageToFormBody } from "./page-handler/page-to-form-body";
import * as fs from "fs";
import { refreshToken } from "./utils/refresh-token";

import Fastify from "fastify";
import { submitForm } from "./page-handler/submitForm";
import { fetchMainPage } from "./page-handler/fetch-main-page";
import { ping, refreshTokenPeriodically } from "./utils/refresh-token";
import { getCart } from "./utils/cart";
const fastify = Fastify({
  logger: true,
});

refreshToken();

const main = async (url: string) => {
  try {
    const initialPage = (await fetchMainPage(url)).data;
    console.log("initial page fetched");
    fs.writeFileSync("log.html", initialPage);
    const formData = pageToFormBody(initialPage);
    console.log("formData extracted");
    console.log(formData);


    const result = await submitForm(url, formData);
    console.log("---- Result received -----");
    console.log("Status: ", result.status);
    const textReponse = result.data;
    console.log("Reponse:", textReponse);

    console.log("Fetching cart....")
    const cart = await getCart()
    console.log("cart status:", cart.status)

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
