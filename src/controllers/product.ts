import { FastifyReply, FastifyRequest } from 'fastify'
import { ProductService } from '../services/product'
export class ProductController {
    async get(req: FastifyRequest, reply: FastifyReply) {
      const productService = new ProductService() 
      productService.listProducts()
      return reply.send('HEllo')

    }
}


