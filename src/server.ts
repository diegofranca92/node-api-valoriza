import "reflect-metadata";
import express from "express";

import "./database";

const server = express()

server.listen(3000, () => 
  console.log('Servidor rodando')
)