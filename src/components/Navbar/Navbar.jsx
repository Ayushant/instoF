import React from "react";

function Navbar() {
  return (
    <>
      <div>
      <div className="navbar bg-[#D9D9D9] h-[121px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="size-">
       
     <div className="text-[#FF5521] text-5xl font-bold pl-10 p-2">
      Insto<span className="text-black">QR</span>
     </div>
      
      </div>
  </div>
  <div className="navbar-center hidden lg:flex" >
    <ul className="menu menu-horizontal px-1 text-2xl font-light">
      <li><a className="p-4 px-5">Home</a></li>
      <li>
        <details>
          <summary className="p-4 px-5">Restaurants</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="p-4 px-5">Order</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="p-4 px-5">Join us</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#FF5521] rounded-3xl w-[220px] text-white text-xl font-light mr-10">Login</a>
  </div>
</div>
      </div>
    </>
  );
}

export default Navbar;
