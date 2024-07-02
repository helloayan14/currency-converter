import React,{useId} from 'react'

function Inputbox({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions,
    selectcurrency="usd",
    amountdisble=false,
    currrencydisable=false,

    className="",
}) {
    const amountinputid=useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm
        flex ${className}`}>
            <div className='w-1/2'>
            <label htmlFor={amountinputid} className='text-black/40 mb-2 inline-block'>{label}</label>
            <input id={amountinputid}
             className='outline-none w-full bg-transparent
            py-1.5 '
            type="number"
            placeholder='Ampount'
            disabled={amountdisble}
            value={amount}
            onChange={(e)=>onamountchange && onamountchange(Number(e.target.value))} //here checking value exist then execute
             /></div>

            <div className='w-1/2 flex flex-wrap
            justify-end text-right'>
                <p className='text-black/40 mb-2 w-full
                '>Currrency Type</p>
                <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none
                '
                value={selectcurrency}
                onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)}
                disabled={currrencydisable}
                >
                    {currencyoptions.map((currency)=>(
                        <option key={currency}
                        value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>

            </div>

        </div>
    )
}

export default Inputbox;
