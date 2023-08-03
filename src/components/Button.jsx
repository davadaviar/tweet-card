import React, { useState } from 'react'

const Button = ({ btnText }) => {

   const [quote, setQuote] = useState([]);
   
   function quoteChange() {
    setQuote(alert('Hook usestate'));
   }

  return (
    <button onClick={quoteChange} className='px-5 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-white mt-12'>
        {btnText}
    </button>
  )
}

export default Button