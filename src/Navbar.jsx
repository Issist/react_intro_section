import TodoIcon from './images/icon-todo.svg'
import CalendarIcon from './images/icon-calendar.svg'
import RemindersIcon from './images/icon-reminders.svg'
import PlanningIcon from './images/icon-planning.svg'
import Logo from './images/logo.svg'
import DropdownList from './DropdownList'
import './navbar.css'


const items = [
  {id: 1, name: 'Item 1', src: {TodoIcon} },
  {id: 2, name: 'Item 2'},
  {id: 3, name: 'Item 3'},
]


function Navbar() {
  return (
    <nav>
       <div className="container nav__">
        <img src={Logo} alt="Website's logo" />
        <DropdownList 
          buttonText='Features'
          items={items}
        />
      </div>
    </nav>
  )
}

export default Navbar