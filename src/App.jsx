import { useState } from 'react'
import { Inputbox } from './components'
import usecurrinfo from './hooks/usecurrinfo'


function App() {
    const [amount,setAmount]=useState(0)
     const [from ,setFrom]= useState("usd")
     const [to ,setTo]= useState("inr")
     const [convertamount,setConvertamount]=useState(0)

     const currencyinfo=usecurrinfo(from)
     const options =Object.keys(currencyinfo)
     
     const swap=()=>{
      setFrom(to)
      setTo(from)
      setConvertamount(amount)
      setAmount(convertamount) 
     }

     const convert=()=>{
      setConvertamount(amount*currencyinfo[to])
     }

  return (
       <div className='w-full h-screen flex flex-wrap 
       justify-center items-center bg-cover 
       bg-no-repeat' style={{
        backgroundImage:`url('https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg')`,}}>
             <div className='w-full'>
              <div className='w-full max-w-md max-auto
               border border-gray-60 rounded-lg p-5
               backdrop-blur-sm bg-white/30 '>
                <form onSubmit={(e)=>{
                  e.preventDefault()
                  convert()
                }}>
                  <div className='w-full mb-1 '>
                    <Inputbox label="from"
                              amount={amount}
                              currencyoptions={options}
                              oncurrencychange={(currency)=>
                                setAmount(amount)
                              }
                              selectcurrency={from}
                              onamountchange={(amount)=>setAmount(amount)}

                    />
                    
                    
                  </div>
                  <div className='relative w-full h-0.5 flex justify-center'>
                    <button
                    type='button'
                    className='absolute left
                    -1/2-translate-x-1/2
                    -translate-y-1/2 border-2
                    border-white rounded-md bg-blue-600 
                    text-white px-2 py-0.5
                    '
                    onClick={swap}

                    >
                      Swap
                    </button>
                  </div>
                  <div className='w-full mt-1 mb-4 '>
                    <Inputbox label="To"
                     amount={convertamount}
                     currencyoptions={options}
                     oncurrencychange={(currency)=>{
                      setTo(currency)
                     }
                     }
                     
                     selectcurrency={to}
                     amountdisble

                     />
                  </div>
                  <button type='submit'
                  className='w-full bg-blue-600 text-white px-4
                  py-3 rounded-lg '>
                    Convert  {from.toUpperCase()} to  {to.toUpperCase()}
                  </button>
                </form>

              </div>

             </div>

       </div>
  )
}

export default App
