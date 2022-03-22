import React, { useState, useEffect } from 'react';
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';



const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav () {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='row nav'>
            <li>
              <NavLink
                to='/'
                exact
                activeStyle={activeStyle}
                className='nav-link navButton'>
                  Traditional 🍗 {'\u00A0'}{'\u00A0'}{'\u00A0'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/VeganRecipe'
                activeStyle={activeStyle}
                className='nav-link navButton'>
                  Vegan 🌿
              </NavLink>
            </li>
          </ul>
          <button
            style={{fontSize: 40}}
            className='btn-clear flashlight'
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}
