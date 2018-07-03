import React from 'react'

import { NavLink } from 'react-router-dom'
import History from '../../containers/History/History'
import Shopping from '../../containers/Shopping/Shopping'

import './Header.css'

export default () => (
    <header>
      <nav>
        <ul>
          <li><NavLink to='/' className={Shopping}>Shopping</NavLink> </li>
          <li><NavLink to='/history' className={History}>History</NavLink> </li>
        </ul>
      </nav>
    </header>
)
