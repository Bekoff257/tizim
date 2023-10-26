import React from 'react'
import "./SideBar.scss"
import Burger from "../../assets/svg/hamburger-menu.svg"
import Logo from "../../assets/svg/logo.svg"
import Statistika from "../../assets/svg/Statistika.svg"
import History from "../../assets/svg/history.svg"
import Table from "../../assets/svg/Table.svg"
import Types from "../../assets/svg/types.svg"
import Clock from "../../assets/svg/Clock.svg"
import Worker from "../../assets/svg/Worker.svg"
import Logout from "../../assets/svg/Logout.svg"
const SideBar = ({setOpen,drawer,setDrawer}) => {
    const handleId = (id) =>{
        setOpen(id)
      }
  return (
    <>
      <div className='sidebar' style={{width: drawer ? "25%" : "8%"}}>
        <div className='sidebar_top' style={{paddingLeft: drawer ? "50px" : "24px"}}>
        <a href="#" onClick={() => setDrawer((prev) => !prev)}>
                <img src={Burger} alt="icon"  />
            </a>
           { drawer && <img src={Logo} alt="logo" width={120} height={60} />}
        </div>
         <ul className='side_menu'>
            <li>
              <div to={'/statistic'} onClick={() => handleId('Statistika')}>
                <img src={Statistika} alt="icon" width={16} height={16} />
               {drawer && 'Statistika'}
              </div>
            </li>
            <li>
              <div to={'/history'} onClick={() => handleId('Ish tarixi')}>
                <img src={History} alt="icon" width={16} height={16} />
               {drawer && 'Ish tarixi'}
              </div>
            </li>
            <li>
              <div to={'/table'} onClick={() => handleId('Jadval')}>
                <img src={Table} alt="icon" width={16} height={16} />
               {drawer && 'Jadval'}
              </div>
            </li>
            <li>
              <div to={'/sections'} onClick={() => handleId('Bo‘limlar va lavozimlar')}>
                <img src={Types} alt="icon" width={16} height={16} />
               {drawer && 'Bo‘limlar va lavozimlar'}
              </div>
            </li>
            <li>
              <div to={'/event'} onClick={() => handleId('Qo‘shimcha ish vaqtlari')}>
                <img src={Clock} alt="icon" width={16} height={16} />
               {drawer && 'Qo‘shimcha ish vaqtlari'}
              </div>
            </li>
            <li>
              <div to={'/worker'} onClick={() => handleId('Xodimlar')}>
                <img src={Worker} alt="icon" width={16} height={16} />
               {drawer && 'Xodimlar'}
              </div>
            </li>
          </ul>
          <div className='sidebar_bottom'>
            <div className='sidebar_logout'>
                <img src={Logout} alt=""  width={16} height={16}/>
                <p>{drawer && 'Chiqish'}</p>
            </div>
           {drawer && <p>Powered by <span>Astrolab</span></p>}
          </div>
      </div>
    </>
  )
}

export default SideBar