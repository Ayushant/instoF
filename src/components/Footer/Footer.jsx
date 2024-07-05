import React, { Component } from 'react'
import image from "../assets/social1.png"

export class Footer extends Component {
  render() {
    return (


       <div>
        
        
        {/* <div className=' bg-black mx-auto'><p>Insto revolutionizes dining by seamlessly integrating restaurant browsing, ordering, and real tim</p></div> */}

{/*         
        <div className=' xl:hidden bg-black  text-orange-500 mt-10 '>
            <p className=''>Insto revolutionizes dining by seamlessly integrating </p>
          <p className=""> restaurant browsing, ordering, and real time</p> <p > tracking,making it p  
              easy to explore menus,
             place orders,and track meals</p>
         </div>
  */}
 
         
        
        <footer className="  h-auto bg-[#FDE68A]   flex flex-col md:flex-row flex-wrap justify-between px-4 pt-8 md:px-12 sm:bg-[#FCD34D] sm:-mb-44 ">

        {/* <img src="../img/insto01.jpg" alt="" /> */}
 
        <div className='xl:hidden pb-8  text-orange-600  '>
  
    <p className='text-center text- mt-5 text-dark sm:text-xl'>Insto revolutionizes dining by seamlessly integrating   restaurant browsing, ordering, and real time  tracking,making it easy to explore menus,place orders,and track meals</p>
    </div>








 
        <div className="hidden sm:block w-40 h-32 px-8 text-7xl rotate-90">
            <h2 className=" font-bold text-7xl mt-10 mr-10 ml-96 text-[90px] text-amber-700 rotate-180">InstoQR</h2>
            <h2 className=" font-bold text-7xl mt-[-90px] ml-[390px] text-[90px] text-shadow text-[#F97315] rotate-180">InstoQR</h2>
        </div>
      
         {/* <div className=''> */}
        <h1 className='xl:hidden sm:  font-extrabold   text-5xl mt-8 -mb-14  mx-auto text-orange-600 [text-shadow:0__5px_0_rgb(0_0_0_/_40%)]'>Insto<span className='text-black'>QR</span> </h1>
        {/* <h1 className='bg-white '>INSTO<span>QR</span></h1> */}
        {/* </div> */}
 
      <div className='px-2 -ml-36 mt-20  grid-cols-3 sm:grid-cols-none'>
 
 <h2 className='font-bold text-xl mt-4 text-[#F97315]'>About Us</h2>
 
  
  {/* <h2 className='font-bold text-xl mt-4 rotate-90'>INSTOQR</h2> */}
 
 
 <div className='hidden sm:block' >
     <p className='mt-5 font-medium'>Insto revolutionizes dining by seamlessly  </p> <p className='font-medium'>integrating restaurant browsing, ordering,</p><p className='font-medium'>and real time tracking. It offers users with  </p> <p  className='font-medium'>a convenient way to monitor their meals </p><p className='font-medium' >explore menus and place Orders.</p>
     
 </div>

 


 </div>
 
      <div className='hidden sm:block px-2  ml-13 -mt-20 sm:mt-20  grid-cols-4 grid-cols-4 sm:grid-cols-4  '>
 
         <h2 className='font-bold  text-xl mt-4  text-[#F97315]'>Customer Support</h2>
        
          
          {/* <h2 className='font-bold text-xl mt-4 rotate-90'>INSTOQR</h2> */}
 
 
         <div className='mt-5'>
             <p className='mt-2 font-medium cursor-pointer'>Contact Us</p>
             <p className='mt-2 font-medium cursor-pointer'>FAQ's</p>
             <p className='mt-2 font-medium cursor-pointer'>Help Center</p>
             <p className='mt-2 font-medium cursor-pointer'>Terms & Conditions</p>
             <p className='mt-2 font-medium cursor-pointer'>Privacy Policy</p>

         </div>
      </div>
 
      <div className='hidden sm:block px-2 mt-20 '>
 
         <h2 className='font-bold text-xl mt-4 text-[#F97315]'>Quick Links</h2>
        
          
          {/* <h2 className='font-bold text-xl mt-4 rotate-90'>INSTOQR</h2> */}
 
 
         <div className='mt-5'> 
             <p className='mt-2 font-medium cursor-pointer'>Browse Restaurants</p>
             <p className='mt-2 font-medium cursor-pointer'>View Orders</p>
             <p className='mt-2 font-medium cursor-pointer'>Register Your Hotel</p>
             <p className='mt-2 font-medium cursor-pointer'>Restaurant Login</p>
             <p className='mt-2 font-medium cursor-pointer'>User Login</p>
             <p className='mt-2 font-medium cursor-pointer'>About Us</p>
             <p className='mt-2 font-medium cursor-pointer'>Careers</p>
             <p className='mt-2 font-medium cursor-pointer'>Blog</p>
             <p className='text-amber-300 hidden sm:block'> hi</p>
             <p className='text-amber-300 hidden sm:block'> hi</p>
             <p className='text-amber-300 hidden sm:block'> hi</p>
         </div>
      </div>
 
     
 
 
      <div className='hidden sm:block px-2 mt-20'>
 
         <h2 className='font-bold text-xl mt-4 text-[#F97315]'>Socials</h2>
        
          
          {/* <h2 className='font-bold text-xl mt-4 rotate-90'>INSTOQR</h2> */}
 
 
         <div className='mt-5'>
             <img className='h-10 w-10 cursor-pointer' src={image} alt=''/>
             <p className='mt-2'></p>
             <p className='mt-2'></p>
             <p className='mt-2'></p>
         </div>
      </div>



      <div className='block sm:hidden flex gap-5'>
         <div className=''> <h2 className='text-orange-600'>Customer support</h2>


         <div className='mt-5'> 
             <p className='mt-2 font-medium cursor-pointer'>Browse Restaurants</p>
             <p className='mt-2 font-medium cursor-pointer'>View Orders</p>
             <p className='mt-2 font-medium cursor-pointer'>Register Your Hotel</p>
             <p className='mt-2 font-medium cursor-pointer'>Restaurant Login</p>
             <p className='mt-2 font-medium cursor-pointer'>User Login</p>
             <p className='mt-2 font-medium cursor-pointer'>About Us</p>
             <p className='mt-2 font-medium cursor-pointer'>Careers</p>
             <p className='mt-2 font-medium cursor-pointer'>Blog</p>
             <p className='text-amber-300 hidden sm:block'> hi</p>
             <p className='text-amber-300 hidden sm:block'> hi</p>
             <p className='text-amber-300 hidden sm:block'> hi</p>
         </div>

         
            
      
            
         </div>

         <div className='ml-5'>

            <h2 className='text-orange-600 '> Quick Links</h2>

                    
         <div className='mt-5'>
             <p className='mt-2 font-medium cursor-pointer'>Contact Us</p>
             <p className='mt-2 font-medium cursor-pointer'>FAQ's</p>
             <p className='mt-2 font-medium cursor-pointer'>Help Center</p>
             <p className='mt-2 font-medium cursor-pointer'>Terms & Conditions</p>
             <p className='mt-2 font-medium cursor-pointer'>Privacy Policy</p>

         </div>

         <div className='mt-7'> 
             <h2 className='text-orange-600'> Socials</h2>

             
         <div className='mt-2 ml-4'>
             <img className='h-6 w-6 cursor-pointer' src={image} alt=''/>
             <p className='mt-2'></p>
             <p className='mt-2'></p>
             <p className='mt-2'></p>
         </div>
         </div>
         </div>
         
      </div>
  
       
 
 
       
       
 </footer>

 </div>
  

     
      

    )
  }
}

export default Footer
