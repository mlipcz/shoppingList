import React from 'react'

import { NavLink } from 'react-router-dom'

import './Header.css'

export default () => (
    <header>
      <nav>
        <ul>
          <li><NavLink to='/' exact>Shopping</NavLink> </li>
          <li><NavLink to='/history'>History</NavLink> </li>
        </ul>
      </nav>
    </header>
)
