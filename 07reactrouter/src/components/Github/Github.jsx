import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/subhanali404').then((response)=>response.json()).then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='flex m-4 bg-gray-600 text-white p-4 text-3xl '>
    <img src={data.avatar_url} width={300} alt="" />
    <div className='flex flex-col justify-center items-center w-full '>
        <p className='m-2'>Github User Id: {data.login}</p>
        <p className='m-2'>Name: {data.name}</p>
        
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader=async ()=>{
    const response = await fetch('https://api.github.com/users/subhanali404')
    // console.log(response)
    return response.json()

}