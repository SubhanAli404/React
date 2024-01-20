import { useState } from "react"



function App() {
  const [color,setColor]=useState('olive')
  return(
    <div className=" w-full h-screen duration-200" style={{backgroundColor:color}}>
     <div className="fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap  justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[red]" onClick={()=>setColor('Red')}>Red</button>
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[blue]" onClick={()=>setColor('Blue')}>Blue</button>
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[green]" onClick={()=>setColor('Green')}>Green</button>
  
  
      </div>
      
     </div>
    </div>
  )
}

export default App