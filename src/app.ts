import {  Request, Response, NextFunction } from "express";
import express  from "express";
import 'express-async-errors'
import cors from 'cors';

import routes from "./routes/router";


const app = express();


app.use(express.json());
app.use(cors())

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => { 
  if(err instanceof Error) {
    return res.status(400).json({ error: err.message })
  }
  
  return res.status(500).json({ status: "error", message: "Erro interno do Servidor" })
});

export default app;
