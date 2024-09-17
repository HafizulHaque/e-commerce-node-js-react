import { createUser } from "./auth.service.js"


export const loginController = async (req, res) => {
  res.send('login')
}

export const signInController = async (req, res) => {
  console.log(req.body)
  let savedUser = await createUser(req.body)
  if(savedUser){
    res.status(201).json(savedUser)
  } else {
    res.status(400).json({ msg: 'Failed to save user' })
  }
}

export const logoutController = async (req, res) => {
  res.send('logout')
}