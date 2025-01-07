import { load } from "../config/stripe";

export class ProductService {
 
  async listProducts() {
    try {
      const stripConfig = await load();
      const products = await stripConfig.products.list()
      console.log(products)
    } catch (error) {
      console.log(error);
    }
  }
}
