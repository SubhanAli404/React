import { useState } from "react"
import {Inputbox} from "./component/index.js"
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
  const [amount,setAmount]=useState()
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState()
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  // console.log(options)
  const convert=()=>{
    setConvertedAmount((amount*currencyInfo[to]).toFixed(2))
  }
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return(
   <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-center  bg-no-repeat" style={{backgroundImage:`url(https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}>
    <div className="w-full">
     <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
      <form action="" onSubmit={(e)=>{
        e.preventDefault()
        convert()
        }}>
       <div>
        <Inputbox
         label="From"
         amount={amount}
         currencyOptions={options}
         onCurrencyChange={(currency)=>{
          setFrom(currency)
         }}
         onAmountChange={(amount)=>{
          setAmount(amount)
        
         }}
         selectedCurrency={from}

         />
       </div>
       <div className="relative w-full h-0.5">
        <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>Swap</button>
       </div>
       <div>
        <Inputbox
         label="To"
         amount={convertedAmount}
         currencyOptions={options}
         onCurrencyChange={(currency)=>setTo(currency)}
         selectedCurrency={to}
         amountDisabled={true}
         
         />
       </div>
       <button type="submit"
       className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
       >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </form>
     </div>
    </div>
  
   </div>
  )
}

export default App
