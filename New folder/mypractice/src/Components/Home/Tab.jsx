import React from 'react'
import Card from './Card'
function Tab(props) {
    const details = props.information

    return (

        <div>
            <div className=''>
                <p className=' font-bold m-4 inline-block'>{details.headline} exams</p>
                <span  className='float-right m-4 text-[#246bfd] font-semibold cursor-pointer'>See All</span>
                <div className='flex overflow-hidden'>

                    {details.title.map((ele,k)=>(
                        <Card key={k} t={details.title[k]} d={details.description[k]} q={details.quantity[k]} p={details.price[k]} img={details.img[k]} /> 
                    ))}
                    {details.title.map((ele,k)=>(
                        <Card key={k} t={details.title[k]} d={details.description[k]} q={details.quantity[k]} p={details.price[k]} img={details.img[k]} /> 
                    ))}
                    

                </div>
                
            </div>
        </div>
    )
}

export default Tab