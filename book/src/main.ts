import { fetchMainPage } from "./fetch-main-page";
import { noSelectionPageToBody } from "./page-handler/page-to-form-body";
import * as fs from "fs"

const token = "SSESSd01ad0e956e3c977e4fabd0c735f147f=uN9K4PFY5ZrjjQsnfz45t1PJ8LpJ4VlXvPL%2CcgzanMfk4CTB";
const url = "https://tickets.rugbyworldcup.com/fr/revente_france_namibie";

import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})



const main = async () => {

  //const initialPage = await (await fetchMainPage(url, token)).text();
  //fs.writeFileSync("log.html", initialPage)
  //const body = noSelectionPageToBody(initialPage)
  
  //console.log(body)
  

};


// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.post('/', function (request, reply) {
    console.log(request)
    reply.send({ hello: 'world' })
  })
  
  // Run the server!
  fastify.listen({ port: 5002 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })