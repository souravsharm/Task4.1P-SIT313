import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div>
         <div className="signup">
             <span className='text'> SIGN UP FOR DAILY INSIDER</span>
             <input className='email' placeholder='email@abc.com' type="email"></input>
             <button className='button'  type="submit">Subscribe</button>
         </div>
        </div>
  )
}

export default NewsLetter
