import { Request, Response, NextFunction } from "express";

import { verify } from "jsonwebtoken";

interface PayLoad {
  sub: string;
}

const tokenValidation = async (req: Request, res: Response, next: NextFunction ) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).end()
  }

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as PayLoad

    req.user_id = sub
    return next()
  } catch (error) {
    return res.status(401).end()
  }
}

export {
  tokenValidation
}