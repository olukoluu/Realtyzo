import React from 'react'
import HeaderNav from './HeaderNav'
import Hero from './Hero'

const Header = () => {
  return (
    <header className=' bg-light'>
      <HeaderNav />
      <Hero />
    </header>
  )
}

export default Header