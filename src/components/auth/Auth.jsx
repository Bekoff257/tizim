import auth from  "./Auth.module.scss"
import DarkLoginSvg from "../../assets/svg/login-v2-dark.svg"
import LoginSidebar from "../LoginSidebar/LoginSidebar"
import { useLocation } from "react-router-dom"

const expRoutes = ["/main"];

const Auth = () => {
  const location = useLocation()  
  

  return !expRoutes.includes(location.pathname) ? (
    <div className={auth.auth}>
      <div className={auth.auth_content}>
        <div className="container">
          <div className={auth.auth_right}>
            <img src={DarkLoginSvg} alt="" />
          </div>
        </div>
        <LoginSidebar/>
        </div>
      </div>
  ) : <></>
}

export default Auth