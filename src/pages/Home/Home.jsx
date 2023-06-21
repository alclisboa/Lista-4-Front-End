import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Newsletter from '../../components/Newsletter/Newsletter'
import SubCategories from '../../components/SubCategories/SubCategories'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Announcement/>
      <Slider/>
      <Categories/>
      <SubCategories/>
      <FeaturedProducts/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
