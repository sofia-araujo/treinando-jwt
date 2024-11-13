import express from "express"
import User from "../models/userModel.js"
import createUserToken from "../helpers/create-user-token.js"
import getUserByToken from "../helpers/get-user-token.js"
import getToken from "../helpers/get-token.js"
export const userRegister = async (req, res) => {
  const {nome, email, senha} = req.body

  try {
    const user = await User.create({nome: nome, email: email, senha: senha})

    try {
      await createUserToken(user, req, res)
    } catch (error) {
      console.log(error)
      res.status(500).json({ err: "Erro ao processar informações" })
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({Err: "erro interno do servidor", error})
  }
}

export const userLogin = async (req, res) => {
  const {email, senha} = req.body

  try {
    const userLogin = await User.findOne({where: { email: email}})

    const comparaSenha = userLogin.senha == senha

    if (!comparaSenha) {
      return res.status(401).json({ error: 'Senha inválida' })
    }

    try {
      await createUserToken(userLogin, req, res)
    } catch (error) {
      console.log(error)
      res.status(500).json({ err: "Erro ao processar informações" })
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({Err: "erro interno do servidor", error})
  }
}

export const testMiddle = async (req, res) => {
 
let userId = ""
  try {
    const token = getToken(req);
    const user = await getUserByToken(token);
    userId = user.usuario_id
} catch (error) {
    console.error(error)
    return
}
  res.status(200).json({msg: "Chegou aqui!"})
}