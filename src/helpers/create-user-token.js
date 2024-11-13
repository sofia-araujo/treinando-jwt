import jwt from "jsonwebtoken"

const createUserToken = async (user, req, res)=> {

  const token = jwt.sign(
    {
      nome: user.nome,
      id: user.id
    },
    "SENHASUPERSEGURA"
  )

  res.status(201).json({msg: "Você está autenticado", token: token, userId: user.id})
}

export default createUserToken