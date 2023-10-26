import React from 'react'
import './Header.scss';
import { Container } from 'react-bootstrap';
import LangRu from "../../assets/svg/lang-ru.svg"
import Mode from "../../assets/svg/mode.svg"
import Notif from "../../assets/svg/notif.svg"
import Profile from "../../assets/svg/profile.png"
import Stick from "../../assets/svg/stick.svg"
const Header = ({title}) => {
   
    // position: "sticky", top:"0", zIndex: "9999"
    
  return (
    <Container fluid style={{position: "sticky", top:"0", zIndex: "9999"}}>
    <div className='header'>
        <div className="left_block">
            <h4>{title}</h4>
        </div>
        <div className="header-end">
            <div className="lang">
               <img src={LangRu} alt="" />
            </div>
            <div className="mood">
               <img src={Mode} alt="" />
            </div>
            <div className="natification">
                <img src={Notif} alt="" />
            </div>
            <img src={Stick} alt="" />
            <div className="account">
                <p>Name Surname</p>
                <img src={Profile} alt="" />
            </div>
        </div>
    </div>
</Container>
  )
}

export default Header