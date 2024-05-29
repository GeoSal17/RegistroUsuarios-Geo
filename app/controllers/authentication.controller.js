import dotenv from "dotenv";
//import jsonwebtoken from "jsonwebtoken";

dotenv.config();

export const usuarios = [{
  user: "Geo",
  email: "geo.sav707@gmail.com",
  password: '1234567' 
},
{
  user: "JP",
  email: "jp@unison.mx",
  password: '12345'
}
]

async function login(req,res){
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password){
    return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
  }
  const usuarioAResvisar = usuarios.find(usuario => usuario.email === email);
  if(!usuarioAResvisar){
    return res.status(400).send({status:"Error",message:"Usuario o contraseña invalida"})
  }
    if(password != usuarioAResvisar.password){
    return res.status(400).send({status:"Error",message:"Usuario o contraseña invalida"})
  }

  const cookieOption = {
    //expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
    path: "/"
  }

  res.cookie("usuario",usuarioAResvisar.user,cookieOption);
  res.send({status:"ok",message:"Usuario loggeado",redirect:"/admin"});
}

async function register(req,res){
  console.log(req.body);
  const user = req.body.user;
  const password = req.body.password;
  const email = req.body.email;
  if(!user || !password || !email){
    return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
  }
  const usuarioAResvisar = usuarios.find(usuario => usuario.user === user);
  if(usuarioAResvisar){
    return res.status(400).send({status:"Error",message:"Este usuario ya existe"})
  }
/*
  const salt = await bcryptjs.genSalt(5);
  const hashPassword = await bcryptjs.hash(password,salt);
*/
  const nuevoUsuario ={
    user, email, password
  }
  usuarios.push(nuevoUsuario);
  console.log(usuarios);
  login(req, res, email, password);
}

export const methods = {
  login,
  register
}