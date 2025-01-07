import "reflect-metadata"

import Fastify from "fastify";
import { routesProducts } from "./routes/product.routes";

const fastify = Fastify({ logger: true });

fastify.register(routesProducts, { prefix: '/v1' })

fastify.listen({ port: 3333}, (err) => {
  if(err) process.exit(1)

    console.log('Api Running')
})