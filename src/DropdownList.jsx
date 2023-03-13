import { useState } from "react"
import Up from './images/icon-arrow-up.svg'
import Down from './images/icon-arrow-down.svg'

const DropdownList = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }


    return (
        <div className="dropdown__container">
            <div className="dropdown__button onhover" onClick={toggleMenu}>
                {props.buttonText}
                <img className='dropdown__arrow' src={isOpen ? Up : Down} alt="Arrow" />
            </div>        
            {isOpen &&(
                <ul className={`dropdown__lists  ${props.buttonText}`}>
                    {props.items.map((item) => (
                        <li key={item.id}><img src={item.image}/> <a href={item.url}>{item.name}</a></li>                                      
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownList