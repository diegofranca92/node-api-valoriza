import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database";

const server = express()

server.use(express.json())

server.use(router)

server.listen(3000, () => 
  console.log('Servidor rodando')
)