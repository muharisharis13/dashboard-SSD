import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { cookiesGet } from '../../config/Cookies'
import Horloge from '../horloge/Horloge'
import { SiderbarData } from './sidebardata'
import { MenuBars, NavMenu, Navbar2, ImgProfil, Strong, WrapImage, WrapperSideMenu, IconClose, TextOperator } from './styles'
import { SubMenu } from './submenu'



export const Navbar = () => {
  const [navbar, setNavbar] = useState(true)

  const btnNavbar = () => setNavbar(!navbar)
  return (
    <div className="container-fluid fixed">
      <Navbar2>
        <div className="row">
          <div className="col">
            <MenuBars>
              <span className="btn" onClick={btnNavbar}>
                <FaBars style={{ color: 'black', fontSize: "20px" }} />
              </span>
            </MenuBars>
          </div>
        </div>
        <div>
          <Horloge />
        </div>

        <TextOperator >
          <h4>{cookiesGet({ key: 'role' })}</h4>
        </TextOperator>
      </Navbar2>

      <NavMenu active={navbar}>
        <IconClose div className="row">
          <div className="col">
            <span className="btn" onClick={btnNavbar}>
              <FaTimes style={{ color: 'white', fontSize: "20px" }} />
            </span>
          </div>
        </IconClose>



        <WrapImage className="row">
          <div className="col-md-12">
            <ImgProfil src="https://i0.wp.com/wikirote.org/wp-content/uploads/2019/07/joko-widodo.jpg?resize=298%2C248&ssl=1" alt="profile" />
          </div>
          <div className="col-md-12">
            <Strong>{cookiesGet({ key: 'role' })}</Strong>
          </div>
        </WrapImage>

        <WrapperSideMenu>
          {
            SiderbarData.map((item, index) => (
              <SubMenu key={index} item={item} />
            ))
          }
        </WrapperSideMenu>
      </NavMenu>
    </div>
  )
}
