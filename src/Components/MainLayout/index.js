import React from 'react'
import { ReactComponent as GskLogo } from '../../Images/SVG/GSKLogo.svg';
import { ReactComponent as Basket } from '../../Images/SVG/Basket.svg';

import './MainLayout.scss'


export const Mainlayout = ({children}) => {

  return (
    <div className="root">
      <div className='mainLayout_header'>
        <div className='mainLayout_header_leftMenu'>
          <button className='mainLayout_header_leftMenu_button'>О компании</button>
          <button className='mainLayout_header_leftMenu_button'>Каталог товаров</button>
          <button className='mainLayout_header_leftMenu_button'>Цены</button>
          <button className='mainLayout_header_leftMenu_button'>Статьи</button>
        </div>
        <div className='logoSvg'><GskLogo/></div>
        <div className='basket'><Basket/></div>
      </div>
      <div className='mainLayout_content'>{children}</div>
    </div>
  )
}