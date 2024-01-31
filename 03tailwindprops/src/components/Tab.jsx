import React from 'react'
import Card from './Card'
function Tab(props) {
    const details = props.information

    return (

        <div>
            <div className=''>
                <p className=' font-bold m-4 inline-block'>{details.headline} exams</p>
                <a href="" className='float-right m-4 text-[#246BFD] font-semibold'>See All</a>
                <div className='flex flex-nowrap'>

                    {details.title.map((ele,k)=>(
                        <Card key={k} t={details.title[k]} d={details.description[k]} q={details.quantity[k]} p={details.price[k]} /> 
                    ))}
                    

                </div>
            </div>
        </div>
    )
}

export default Tab