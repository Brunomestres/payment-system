import { FastifyInstance } from "fastify"
import { ProductController } from "../controllers/product"


const productController = new ProductController()



export async function routesProducts(fastify: FastifyInstance){
  fastify.get('/', productController.get)
}