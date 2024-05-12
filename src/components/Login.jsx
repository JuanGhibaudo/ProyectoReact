import React, { useState } from 'react'
import Image from "../assets/image/LoginVector.jpg";
import ImageProfile from '../assets/image/Profile.jpg';
import appFirebase from '../credenciales';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {
    const [registrando, setRegistrando] = useState(false)

    const funcAutenticacion = async(event) =>{
        event.preventDefault();
        const correo = event.target.email.value;
        const contraseña = event.target.password.value;
        if (registrando) {
            try {
            await createUserWithEmailAndPassword(auth, correo, contraseña)
                
            } catch (error) {
                alert("Asegurese que la contraseña tenga 8 o mas caracteres")
            }
        }
        else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("Alguno de los datos ingresados es incorrecto.")
            }
            
        }
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-4">
                <div className="padre">
                    <div className="card card-body shadow-lg">
                        <img src={ImageProfile} alt="" className='estilo-profile' />
                        <form onSubmit={funcAutenticacion}>
                            <input type="text" placeholder='Ingresar E-mail' className='cajatexto'id='email'/>
                            <input type="password" placeholder='Ingresar contraseña' className='cajatexto'id='password'/>
                            <button className='btnform'>{registrando? "Registrate" : "Inicia sesión"}</button>
                        </form>
                        <h4 className='texto'>{registrando? "Si ya tienes cuenta":"¿No tenés cuenta?    "}
                        <button onClick={()=>setRegistrando(!registrando)} className='btnswitch'>{registrando?"Inicia sesión" : "Registrate"}</button></h4>
                    </div>
                </div>  
                

            </div>
            <div className="col-md-8">
                <img src={Image} alt="" className='tamaño-imagen' />
            </div>
        </div>
    </div>
  )
}

export default Login
