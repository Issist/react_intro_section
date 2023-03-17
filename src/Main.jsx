import Image from './Image';
import './main.css';
import { useState } from "react";



function Main() {
  return (
    

    <main className='main'>
        <div className="container__left">
            <h1>Make <br/> remote work</h1>
            <p>Get your team in sync, no matter your location. <br/> Streamline processes, create team rituals, and <br/> watch productivity soar.</p>
            <button className='btn__main onhover'>
                <a href="#">Learn more</a>
            </button>
            <div className="image__container">
                <img src="./images/client-databiz.svg" alt="databit" />
                <img src="./images/client-audiophile.svg" alt="audiophile" />
                <img src="./images/client-meet.svg" alt="meet" />
                <img src="./images/client-maker.svg" alt="maker" />
            </div>
        </div>
        <Image/>
    </main>
  )
}

export default Main