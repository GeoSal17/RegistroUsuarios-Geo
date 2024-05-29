//import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import {usuarios} from "./../controllers/authentication.controller.js";

dotenv.config();

function soloAdmin(req,res,next){
  const logueado = revisarCookie(req);
  if(logueado) return next();
  return res.redirect("/")
}

function soloPublico(req,res,next){
  const logueado = revisarCookie(req);
  if(!logueado) return next();
  return res.redirect("/admin")
}

function revisarCookie(req){
  try{
    const usuario = decodeURIComponent(req.headers.cookie.split("; ").find(cookie => cookie.startsWith("usuario="))).slice(8);

    const usuarioAResvisar = usuarios.find(u => u.user === usuario);
    console.log(usuarioAResvisar)
    if(!usuarioAResvisar){
      return false
    }
      return true;
  }
  catch{
    return false;
  }
}

export const methods = {
  soloAdmin,
  soloPublico,
}