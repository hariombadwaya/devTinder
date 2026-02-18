import logo from "./assets/logo's/DevTinder_logo.png"
function App() {
 

  return (
    <>
    <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
  <a className="text-xl font-semibold tracking-wide">
  DevTinder
</a>
  {/* <a className="btn btn-ghost  ">
   <img src={logo} alt="DevTinder Logo" className="w-20 h-25" />
 </a> */}
  </div>
  <div className="flex-none gap-2">
     <div className="form-control"></div>
    <div className="dropdown dropdown-end mx-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
     <h1 className="text-3xl font-bold text-blue-500"> Hello World</h1> 
     <h2 className="text-2xl font-semibold text-red-600 underline-offset-6">Hariom Badwaya</h2>
       
    </>
  )
}

export default App
