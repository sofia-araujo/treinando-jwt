import jwt from "jsonwebtoken"
import express from "express"
import getToken from "./get-token.js"

const checkToken = (req, res, next) => {

  if(!req.headers.authorization){
    return res.status(401).json( {message: "Acesso negado"} )
  }

  const token = getToken(req)

  if (!token) {
    return res.status(401).json({ message: "Acesso negado" })    
  }

  
  try {
    const verificado = jwt.verify(token, "SENHASUPERSEGURA")
    console.log(verificado)
    req.user = verificado

    next();
} catch (error) {
    return res.status(400).json({ message: "Token Inválido" })
}

}

export default checkToken