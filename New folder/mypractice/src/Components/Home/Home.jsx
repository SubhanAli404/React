import React from 'react'
import Tab from './Tab'
import  CarouselDefault  from './CarouselDefault'
function Home() {
    
    const info1 = {
      title: ['JEE Mains 2023', 'Civil Services 2023', 'SSL CGL 2023'],
      description: ['National Testing Agency', 'Union Public Service Commission', 'Staff Selection Commission'],
      quantity: [20, 15, 10],
      price: [1200, 1500, 1000],
      headline:'Recommended',
      img:['/src/img/logo.png','/src/img/civil.png','/src/img/ssc.png']
    }
    const info2 = {
      title: ['VITEEE 2023', 'SRM JEE 2023', 'TS EAMCT 2023'],
      description: ['Vellore Institute of Technology', 'SRMIST', 'TSCHE'],
      quantity: [10, 10, 10],
      price: [1500, 1000, 1000],
      headline:'Recent',
      img:['/src/img/vit.png','/src/img/srm.png','/src/img/ts.png']
    }
    
    const info=[info1,info2];
  return (
    <>
   
    <CarouselDefault />
    {info.map((inf,k) => (
                <Tab key={k} information={inf}/>
                
            ))
            }

    </>
    )
}

export default Home