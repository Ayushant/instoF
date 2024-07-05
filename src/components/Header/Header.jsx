import React, { Component } from 'react'
// import { Input } from "@material-tailwind/react"

export class Header extends Component {
  render() {
    return (
      <header className='bg-black sm:bg-white   '>
       
       
 <div className='sm:h-[200px] xl:h-[460px]  rounded-tl-[500px] rounded-tr-[500px] bg-amber-200 sm:bg-amber-200 md:bg-amber-200'>

    <div className='pb-8   '>
    <h1 className='text-orange-500 pt-24 text-4xl text-center font-bold sm:text-8xl' >DON'T MISS OUT</h1>
    <p className='text-center text- mt-5 text-dark sm:text-xl'>Sign up for our newsletter about trending menus and new restaurants</p>
    </div>


    <div className='  flex justify-center   gap-4 xl:mt-3 sm:gap-9  '>
      <form action="">
        <label class='block'>
          <input class='bg-black rounded-full text-white p-1 sm:p-2  xl:ml-2 w-[29vb] xl:w-[60vb] xl:mt-5 xl:bg-black '  placeholder='Enter email' />
        </label>
      </form>

      <div>
        <button class="bg-orange-600  text-white p-1  sm:p-2  w-[20vb] xl:w-[22vb] rounded-full xl:mt-5 sm:w-[10]   ">
         Sign up
        </button>
      </div>
    </div>
    

   {/* <div   className='hidden sm:block   flex justify-center  mt-3  '> 
    <form className='  '>
  <label class="block">
    
    <input class="w-[60vb] mt-10 rounded-full border-slate-200 p-2 px- bg-black text-white placeholder-white" placeholder='Enter Email'/>
    
    <p class="mt-2 opacity-10 contrast-more:opacity-100 text-white text-sm">
     
    </p>
  </label>
</form>
  

    
    <button class="bg-orange-500 mt-10 w-36 hover:bg-orange-500 text-white font-semibold py-2 px-4  ml-2 rounded-full hover:bg-orange-600">
  Sign up
</button>


</div>  */}

</div> 

      </header>
    )
  }
}

export default Header



