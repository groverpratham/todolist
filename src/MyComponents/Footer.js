import React from 'react'

const Footer = () => {
    let myStyle={
        position: "absolute",
        top: "100vh",
        width: "100%"
    }
  return (
    <footer className='bg-dark text-light py-3 ' style={myStyle}>
     <p className='text-center'>Copyright &copy; MyTodos list</p> 
    </footer>
  )
}

export default Footer
