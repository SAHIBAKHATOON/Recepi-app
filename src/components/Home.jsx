import React from 'react'
import Navbar from '../components/Navbar'
import PopularSlider from '../components/PopularSlider'
import  TrendingSlider from '../components/TrendingSlider'
const Home = () => {
  return (
    <>
<div className="main">
<Navbar />

    <PopularSlider />
    <TrendingSlider />
    
</div>
    </>
  )
}

export default Home