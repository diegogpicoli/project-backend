import { Request, Response, NextFunction } from "express";

const tokenValidation = async (req: Request, res: Response, next: NextFunction ) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).end()
  }

  next()
}

export {
  tokenValidation
}