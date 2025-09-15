import React from 'react'
import HeroCarousel from '../components/HeroCarosel'
import HeroCard from '../components/Herocard/HeroCard'
import PopularProducts from '../components/productCard'
import ShopByGoal from '../components/Home/ShopByGoal'
import BestSellers from '../components/Home/BestSeller'

const Home = () => {
  return (
    <div className='w-full h-auto px-6'>
      <HeroCarousel/>
     <ShopByGoal/>
     <BestSellers/>
        
    </div>
  )
}

export default Home
