import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css'
import { SidebarData } from './SidebarData';
import ScrollIntoView from 'react-scroll-into-view';



import notusMeni from '../images/notus-meni.svg';
import notusMeniClose from '../images/notus-meni-close.svg';
import notusLogoMain from '../images/Notus-logo-main.svg';
import notusLogoMeni from '../images/Notus-logo-meni.svg';
import {Button} from './Button';

function Navbar(){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);


    return (
        <>

                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <p>Menu</p>
                        <img src={notusMeni} onClick={showSidebar} />
                    </Link>
                    <div className='navbar-logo'>
                        <img src={notusLogoMain} />
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <p>Exit</p>
                                <img src={notusMeniClose}/>
                            </Link>
                            <div className='navbar-logo'>
                                <img src={notusLogoMeni} />
                            </div>
                        </li>
                        <div className="tasks">
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <ScrollIntoView selector={item.path}>
                                        <span>{item.title}</span>
                                    </ScrollIntoView>
                                </li>
                            );
                        })}
                        </div>
                    </ul>
                </nav>

        </>
    );
}
export default Navbar;