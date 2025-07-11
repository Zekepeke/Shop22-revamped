import React from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'

const Header = () => {
  return (
    <header className="border-b border-b-gray-400 py-5">
      <Container className='flex items-center justify-between gap-7'>
        <HeaderMenu/>
        <Logo/>
        <div>
            fart
        </div>
      </Container>
    </header>
  )
}

export default Header