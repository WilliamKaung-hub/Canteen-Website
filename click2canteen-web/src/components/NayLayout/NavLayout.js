"use client"
import { Container } from '@mui/material'
import React from 'react'

import Navbar from './NavBar'
import Footer from './Footer'
import Body from './Body'


export default function Navlayout({children}) {
  return (
    <div>
      <>
      <Navbar/>
      <Container sx={{mt:4}}>{children}</Container>
      <Body/>
      <Footer/>
      </>
    </div>
  )
}
