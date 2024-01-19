import React from 'react'
import Tab from './Tab'
import { CarouselDefault } from './CarouselDefault'
function Home() {
    const headlines=["Recommended","Recent"]
    
  return (
    <>
   
    <CarouselDefault />
    <Tab headline={headlines[0]}/>
    <Tab headline={headlines[1]}/>
    </>
    )
}

export default Home