import React from 'react'
import Nav from './nav/Nav'
import Main from './main/Main'


const app = () => {
  return (
    <div className='app'>
      <div className='nav'>
        <Nav></Nav>
      </div>
      <div className='main'>
        <Main></Main>
      </div>
    </div>
  )
}

export default app
