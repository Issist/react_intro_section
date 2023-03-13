import Logo from './images/logo.svg'
import DropdownList from './DropdownList'
import './navbar.css'


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


function Navbar() {
  return (
    <>
     <nav>
      <div className='container container__left'>
          <img id='logo' src={Logo} alt="Website's logo" />
          <DropdownList 
            buttonText='Features'
            items={featuresItems}
          />
          <DropdownList 
            buttonText='Company'
            items={companyItems}
          />
          <a className='onhover' href="#">Careers</a>
          <a className='onhover' href="#">About</a>
          
      </div>
      <div className="list__wrapper">
        <div className="container container__right">
          <a className='onhover' href="#">Login</a>
          <a className='onhover' href="#">Register</a>
        </div> 
      </div>
    </nav>
    </>
   
  )
}

export default Navbar