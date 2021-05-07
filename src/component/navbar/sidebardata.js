import React from 'react'
import { FaBell, FaCaretDown, FaCaretUp, FaDoorOpen, FaEdit, FaHome, FaRegAddressCard, FaSignInAlt } from 'react-icons/fa'

export const SiderbarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaHome />
  },
  {
    title: 'PushNotification',
    path: '/PushNotification',
    icon: <FaBell />
  },
  {
    title: 'EditNotification',
    path: '/EditNotification',
    icon: <FaEdit />
  },
  {
    title: 'Dashboard',
    path: '/DashboardOperator',
    icon: <FaHome />
  },
  {
    title: 'EditOperator',
    path: '/EditOperator',
    icon: <FaEdit />
  },
  {
    title: 'AddOperator',
    path: '/EditOperators/Add',
    icon: <FaRegAddressCard />
  },
  {
    title: 'LogOut',
    path: '/Login',
    icon: <FaDoorOpen />
  },
  // {
  //   title: 'Stock',
  //   path: '#',
  //   icon: <FaSignInAlt />,
  //   iconClosed: <FaCaretDown />,
  //   iconOpened: <FaCaretUp />,
  //   subNav: [

  //     {
  //       title: 'In Stock',
  //       path: '/Stock/instock',
  //       icon: ''
  //     },

  //   ]
  // },
]