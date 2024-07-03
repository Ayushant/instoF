import React, { Component } from 'react'
// import { Input } from "@material-tailwind/react"

export class Header extends Component {
  render() {
    return (
      <header>
       
       
 <div className=' h-[460px] rounded-tl-[500px] rounded-tr-[500px] bg-amber-200 '>

    <div className='pb-8  '>
    <h1 className=' text-orange-500 pt-24 text-4xl text-center font-bold sm:text-8xl' >DON'T MISS OUT</h1>
    <p className='text-center text-xl mt-7 text-dark sm:mt-5'>Sign up for our newsletter about trending menus and new restaurants</p>
    </div>
    

   <div className='flex justify-center mt-3'> 

    <form className='  '>
  <label class="block">
    
    <input class="w-[35vb] mt-2 mx-auto mr- rounded-full border-slate-200 p-3 px-6 bg-black text-white placeholder-white sm:w-[60vb] sm:mt-10 sm:p-2 sm:px-5 sm:mx-auto" placeholder='Enter Email'/>
    
    <p class="mt-2 opacity-10 contrast-more:opacity-100 text-white text-sm">
     
    </p>
  </label>
</form>
  

    <div className=' '>
    <button class="bg-orange-500 mt-1 w-44 hover:bg-orange-500 text-white font-semibold py-5 px-4  ml-2 rounded-full hover:bg-orange-600
        sm:mt-10 sm:py-2 sm:w-36 ">
  Sign Up
</button>
</div>

</div> 

</div> 

      </header>
    )
  }
}

export default Header




