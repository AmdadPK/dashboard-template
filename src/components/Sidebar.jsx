import React, { useState } from 'react';
import Logo from '../imgs/logo.png'
import './Sidebar.css'
import { SidebarData } from '../Data/Data'

import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {

    const [selected, setSelected] = useState(0)

    return (
        <div className='Sidebar'>
            {/* Logo */}
            <div className='logo'>
                <img src={Logo} alt="" />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>

            {/* Menu */}
            <div className='menu'>
               {SidebarData.map((item, index) => {
                    return(
                        <div className={ selected === index ? 'menuItem active':'menuItem' }
                        key={index}
                        onClick={ () => setSelected(index) }
                        >
                            <div>
                                <item.icon />
                            </div>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
               })}
               <div className='menuItem'>
                    <div>
                        <FaSignOutAlt />
                    </div>
                    <span>
                        LogOut
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar