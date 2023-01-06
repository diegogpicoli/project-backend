import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response){
    const { name, price, description, category_id } = req.body

    let banner = '';
    
    const createProductService = new CreateProductService();

    const category = await createProductService.execute({
      name,
      price,
      description,
      banner,
      category_id
    });

    return res.json(category)
  }
}

export {
  CreateProductController
}