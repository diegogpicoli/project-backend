import { Router } from "express";
import { CreateUserController } from "../controllers/users/CreateUserController";
import { userValidation } from "../middlewares/users/userMiddleware";

const routes = Router();

//-- ROTAS USERS --//
routes.post("/users", userValidation, new CreateUserController().handle);

export default routes;