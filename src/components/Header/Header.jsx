import React, { useRef, useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpended, setMenuOpened] = useState(false);
  const getMenuStyle = (menuOpended) => {
    if(document.documentElement.clientWidth <= 768){
      return {right: !menuOpended && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="" alt="" width={100}/>
            <OutsideClickHandler 
            onOutsideClick={() => setMenuOpened(false)}
            >
            <div className="flexCenter h-menu"
            style={getMenuStyle(menuOpended)}
            >
                <Link to='hero' spy={true} smooth={true} offset={-50} duration={400} >Home</Link>
                <Link to='service' spy={true} smooth={true} offset={-50} duration={400}>About</Link>
                <Link to='value' spy={true} smooth={true} offset={-50} duration={400}  >Contact Us</Link>
                <Link to='contact' spy={true} smooth={true} offset={-50} duration={400}  >Services</Link>
                <button className="button">
                    <a >Contact</a>
                </button>
                
            </div>
            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
        </OutsideClickHandler>
        </div>
       
    </section>
  )
}

export default Header