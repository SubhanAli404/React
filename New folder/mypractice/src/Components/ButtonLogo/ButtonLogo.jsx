import React from 'react'

function ButtonLogo(props) {
    console.log(props.paths)
    return (
        <div className='mb-4 cursor-pointer'>
            <div className='bg-black px-3 py-2 rounded-2xl'>
                <div className='text-white flex '>
                    <div className=' p-2'>
                        <img src={props.paths} className='h-8 ' alt="" />

                    </div>
                    <div className='flex flex-col'>
                        
                    <p>Download On the</p>
                    <p>{props.name} Store</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ButtonLogo