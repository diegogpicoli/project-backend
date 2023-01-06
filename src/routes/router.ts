import { Router } from "express";
import { CreateUserController } from "../controllers/users/CreateUserController";
import { AuthUserController } from "../controllers/users/AuthUserController";
import { DetailUserController } from "../controllers/users/DetailUserController";
import { CreateCategoryController } from "../controllers/categories/CreateCategoryController";
import { ListCategoryController } from "../controllers/categories/ListCategoryController";
import { CreateProductController } from "../controllers/products/CreateProductsController";


import { userValidation } from "../middlewares/users/userMiddleware";
import { tokenValidation } from "../middlewares/users/tokenMiddleware";


const routes = Router();

//-- ROTAS USERS --//
routes.post("/users", userValidation, new CreateUserController().handle);

routes.post("/login", new AuthUserController().handle);

routes.get("/me", tokenValidation, new DetailUserController().handle);

//-- ROTAS CATEGORIES --//
routes.post("/category", tokenValidation, new CreateCategoryController().handle);

routes.get("/category", tokenValidation, new ListCategoryController().handle);

//-- ROTAS PRODUCTS --//
routes.post("/product", tokenValidation, new CreateProductController().handle);


export default routes;