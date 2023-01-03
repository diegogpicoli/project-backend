import { Request, Response, NextFunction } from "express";

const userValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!name) {
    throw new Error("É preciso informar um nome")
  }

  if (!email) {
    throw new Error("É preciso informar um email");
  }

  if (!password) {
    throw new Error("É preciso informar um password");
  }

  next();
}

export {
  userValidation
}