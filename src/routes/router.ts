import { Router } from "express";
import { CreateUserController } from "../controllers/users/CreateUserController";

const routes = Router();

//-- ROTAS USERS --//
routes.post("/users", new CreateUserController().handle);

export default routes;