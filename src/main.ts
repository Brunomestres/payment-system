import "dotenv/config";

import Fastify from "fastify";
import AWS from "aws-sdk";

import { stripe } from "./lib/stripe.ts";

AWS.config.update({ region: process.env.AWS_REGION });

const SQS = new AWS.SQS();

const fastify = Fastify({ logger: true });

fastify.post("/v1/send", async (req, reply) => {
  try {
    const products = await stripe.products.list();
    const sqs = SQS.sendMessage({
      MessageBody: JSON.stringify({ hello: "World" }),
      QueueUrl: `${process.env.AWS_QUEUE_URL}`,
    }).promise();

    console.log(sqs);

    return reply.send({ products });
  } catch (error) {
    return reply.send({ error: "Aconteceu um erro" });
  }
});

fastify.listen({ port: 3333 });
