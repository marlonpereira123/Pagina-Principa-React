import React from 'react'
import {BrowserRouter, Link } from 'react-router-dom'
import { AreaLogin } from './styled'
import {BtnDeFautIcons, BtnDeFaut} from '../../component/styled'
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';



export default () =>{
    return(
        <div>
           <BrowserRouter>
            <AreaLogin>

                <h1>Oliveira Trade</h1>
                

                    <BtnDeFautIcons >
                        <FacebookIcon/>
                        <div className='center'>Fazer login com o Facebook</div> 
                    </BtnDeFautIcons>

                    <BtnDeFautIcons>
                        <GTranslateIcon/>
                        <div className='center'>Fazer login com o Google</div>
                    </BtnDeFautIcons>

                    <p>
                        Ou
                    </p>


                    <form>
                        <div className='form-input'>
        
                           <label>E-mail</label>
                            <input type='Email'/>
                        </div>

                        <div className='form-input'>
                            <label>Senha</label>
                            <input type='password'/>
                        </div>

                        <BtnDeFaut>
                            Entrar                            
                        </BtnDeFaut>

                        <div className='footerLogin' >
                            Não tem conta?
                            <Link to='registrar'> Registre-se</Link>
                        </div>
                    </form>

            </AreaLogin>
            </BrowserRouter> 
        </div>
    )
}