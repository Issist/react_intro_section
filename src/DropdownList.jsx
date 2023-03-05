import { useState } from "react"


const DropdownList = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }


    return (
        <div className="dropdown__container">
            <div className="dropdown__button" onClick={toggleMenu}>
                {props.buttonText}
            </div>        
                <ul className="dropdown__lists">
                    {props.items.map((item) => (
                        <>
                        <li key={item.id}>
                            {item.name}
                        </li>
                        <img src={item.src}/>
                        </>
                        
                    ))}
                </ul>
            
        </div>
    );
}

export default DropdownList