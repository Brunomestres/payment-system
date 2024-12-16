import "reflect-metadata"

import Fastify from "fastify";

const fastify = Fastify({ logger: true });




fastify.listen({ port: 3333}, (err) => {
  if(err) process.exit(1)

    console.log('Api Running')
})