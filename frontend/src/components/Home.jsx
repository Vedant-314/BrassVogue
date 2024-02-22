import React from 'react'
import Header from "./Header"
import Banner from "./Home/Banner"
import MainBody from "./Home/MainBody"
import NewArrival from './Home/NewArrival'
import Footer from "./Footer"

function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <MainBody/>
      <NewArrival/>
      <Footer/>
    </>
  )
}

export default Home