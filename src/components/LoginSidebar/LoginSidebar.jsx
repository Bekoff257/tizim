import loginmod from "./Login.module.scss"
import TizimLogo from "../../assets/svg/tizim-logo.svg"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { instance } from "../../api_base/api_base"
import { useDispatch } from "react-redux"
import LOGIN_ADMIN from "../../redux/types/loginType"

function LoginSidebar() {
    const dispatch = useDispatch()
  const [ username, setName ] = useState('')
  const [ password, setPassword ] = useState('')
  const navigate = useNavigate()


  const loginUser = (e) => {
    e.preventDefault()
    instance.post('/auth/login', {
        username,
        password
    }).then(response => {
        navigate('/main')
        setName("")
        setPassword("")
        dispatch({payload: response.data, type: LOGIN_ADMIN})
    }).catch(error => {
        console.log(error)
        setName("")
        setPassword("")
    })
  }

  return (
    <>
        <div className={loginmod.auth_left}>
            <div className={loginmod.auth_left_welcome}>
              <div className={loginmod.auth_left_logo}>
                <div className={loginmod.logo}>
                    <img src={TizimLogo} alt="Tizim_Logo" />
                </div>
              <h2>
                Astrolab tizimga <br />
                xush kelibsiz! 👋
              </h2> 
              <p>
                Tizimga kirish uchun <br />
                quyida login va parolni kiriting
              </p>
              </div>
              <div>
                <form onSubmit={loginUser}>
                  <div className={loginmod.login}>
                    <label htmlFor="email">LOGIN</label> <br />
                    <input value={username} className={loginmod.email} type="text" id="email" placeholder="admin@mail.com" onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div className={loginmod.password}>
                    <div className={loginmod.forgot_password}>
                      <label htmlFor="password">PAROL</label> <br />
                        <button>PAROLNI UNUTDINGIZMI</button>
                    </div>
                    <input value={password} className={loginmod.pass} type="password" id="password" placeholder="******" onChange={(e) => setPassword(e.target.value)}/>
                  </div> 
                    <div className={loginmod.checkbox}>
                        <input type="checkbox" /> 
                        Meni eslab qol
                    </div>
                    
                  <div className={loginmod.btn}>
                    <button>Kirish</button>
                  </div>
                </form>                
              </div>
              <div className={loginmod.powered}>
                <p>
                    Powered by  
                    <Link target="_blank" to={'https://astrolab.uz/'}>
                        Astrolab
                    </Link>
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default LoginSidebar