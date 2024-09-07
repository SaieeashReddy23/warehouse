import { MoonIcon, NotificationIcon, SunIcon } from '../utils/icons'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../features/user/userSlice'

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <nav className='bg-gray-100 sticky left-0 top-0 z-50 '>
      <div className='navbar align-element '>
        <div className='navbar-start'>
          <NavLink
            to='/'
            tabIndex={0}
            role='button'
            className=' hover:scale-105 ease-in-out duration-200'
          >
            <img src={Logo} alt='kmg-logo' className=' h-12 w-12' />
          </NavLink>
        </div>

        <div className='navbar-end flex flex-row gap-4  '>
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input type='checkbox' onChange={() => dispatch(toggleTheme())} />

            {/* sun icon */}
            <SunIcon className='swap-on' />

            {/* moon icon */}
            <MoonIcon className='swap-off' />
          </label>
          <NavLink to='/notifications' className='btn btn-ghost btn-square '>
            <div className='indicator'>
              <NotificationIcon />
              <span className='badge badge-xs badge-primary indicator-item'>
                8
              </span>
            </div>
          </NavLink>
          <div className='dropdown dropdown-end'>
            <div className='avatar online' role='button' tabIndex={0}>
              <div className=' ring-primary ring-offset-base-100 w-10 rounded-full '>
                <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content menu bg-base-200 mt-4 rounded-box z-[1] w-52 p-2 shadow'
            >
              <li>
                <NavLink to='/profile'>Profile</NavLink>
              </li>
              <li>
                <NavLink to='/login'>Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
