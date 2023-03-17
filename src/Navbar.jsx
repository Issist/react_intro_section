import Logo from './images/logo.svg'
import DropdownList from './DropdownList'
import MenuIcon from './images/icon-menu.svg'
import CloseIcon from './images/icon-close-menu.svg'
import './navbar.css'
import { useState } from 'react'


const featuresItems = [
  {id: 1, name: 'Todo List', url: '#', image: './images/icon-todo.svg'},
  {id: 2, name: 'Calendar', url: '#', image: './images/icon-calendar.svg'},
  {id: 3, name: 'Reminders', url: '#', image: './images/icon-reminders.svg'},
  {id: 4, name: 'Planning', url: '#', image: './images/icon-planning.svg'},
]

const companyItems = [
  {id: 1, name: 'History', url: '#', image: ''},
  {id: 2, name: 'Our Team', url: '#', image: ''},
  {id: 3, name: 'Blog', url: '#', image: ''},
]


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <>
     <nav>
        <div className={isNavShowing ? 'overall' : 'hide__nav'}></div>
        <img id='logo' src={Logo} alt="Website's logo" />
        <div className={`container ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
            <ul className='list-left'>
                <li className="nav__list-item">
                    <DropdownList 
                      buttonText='Features'
                      items={featuresItems}
                    />
                </li>
                <li className="nav__list-item">
                    <DropdownList 
                      buttonText='Company'
                      items={companyItems}
                    />  
                </li>
                <li className="nav__list-item">
                    <a className='onhover' href="#">Careers</a>
                </li>
                <li className="nav__list-item">
                    <a className='onhover' href="#">About</a>
                </li>
            </ul>
            <ul className='list-right'>  
                <li>
                    <a className='onhover' href="#">Login</a>
                </li>
                <li id='register'>
                    <a className='onhover' href="#">Register</a>
                </li>
            </ul>
        </div>
        
        <button className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
            <img src={ !isNavShowing ? MenuIcon : CloseIcon } alt="Navigation bar" />
        </button>  
    </nav>
  </>

  )
}

export default Navbar