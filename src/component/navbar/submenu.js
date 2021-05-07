import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SideBarLink = styled(NavLink)`
display:flex;
color: ${({ itemPath }) => (itemPath === window.location.pathname ? '#fff' : '#707070')};
justify-content: space-between;
align-items:center;
padding:20px;
list-style:none;
height:60px;
text-decoration: none;
font-size:18px;
position:relative;
transition:450ms;
font-weight:650;
left:0%;
background-color : ${({ itemPath }) => (itemPath === window.location.pathname ? '#FEC8C8' : 'transparent')};


&:hover {
  background : #FEC8C8;
  cursor:pointer;
  text-decoration: none;
  color:white;
  
}
`


const DropDwonLink = styled(NavLink)`
height: 50px;
padding-left:2.4rem;
display:flex;
align-items: center;
text-decoration:none;
color: ${({ itemPath }) => (itemPath === window.location.pathname ? '#fff' : '#707070')};
font-size:18px;
transition:340ms;
font-weight:500;
background-color : ${({ itemPath }) => (itemPath === window.location.pathname ? '#FEC8C8' : '#fff')};


&:hover {
  background : #FEC8C8;
  cursor:pointer;
  text-decoration: none;
  color:white;
  
}
`

export const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false)
  const [selected, setSelected] = useState(false)

  const btnShowSubnav = () => {
    setSubnav(!subnav)
    setSelected(!selected)
  }



  return (
    <>
      <SideBarLink itemPath={item.path} to={item.path} onClick={() => { item.subNav && btnShowSubnav() }}>
        <div>
          {item.icon} &nbsp; {item.title}
        </div>
        <div>
          {item.subNav && subnav ? item.iconOpened : item.iconClosed}
        </div>
      </SideBarLink>
      {
        subnav && item.subNav !== undefined ? item.subNav.map((item, index) => (
          <DropDwonLink itemPath={item.path} to={item.path} key={index}>
            {item.icon} &nbsp; {item.title}
          </DropDwonLink>
        ))

          : null
      }
    </>
  )
}