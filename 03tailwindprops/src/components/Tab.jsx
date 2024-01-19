import React from 'react'
import Card from './Card'
function Tab(props) {
    
    return (
        
            <div>
                <div className=''>
                    <p className=' font-bold m-4 inline-block'>{props.headline} exams</p>
                    <a href="" className='float-right m-4 text-[#246BFD] font-semibold'>See All</a>
                    <div className='flex flex-nowrap'>


                        <Card />
                        <Card />
                        <Card />

                    </div>
                </div>
            </div>
            )
}

            export default Tab