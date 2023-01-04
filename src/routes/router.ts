import { Router } from "express";
import { CreateUserController } from "../controllers/users/CreateUserController";
import { AuthUserController } from "../controllers/users/AuthUserController";
import { DetailUserController } from "../controllers/users/DetailUserController";
import { userValidation } from "../middlewares/users/userMiddleware";
import { tokenValidation } from "../middlewares/users/tokenMiddleware";

const routes = Router();

//-- ROTAS USERS --//
routes.post("/users", userValidation, new CreateUserController().handle);
//-- ROTAS LOGIN --//
routes.post("/login", new AuthUserController().handle);
//-- ROTAS INFO --//
routes.get("/me", tokenValidation, new DetailUserController().handle);

export default routes;