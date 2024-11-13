import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

const getUserByToken = async (token) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      return res.status(401).json({ message: "Acesso Negado" })
    }

      const decoded = jwt.verify(token, "SENHASUPERSEGURA")
      const userId = decoded.id;

      try {
        const user = User.findByPk(userId)
        resolve(user)
      } catch (error) {
        reject({ status: 500, message: "Erro ao buscar usuário" })
      }
  })
}

export default getUserByToken