import React,{ useState }  from 'react'
import {FaAlignJustify,FaTimes} from "react-icons/fa";
import './navbar.css'
import logo from '../../assets/logo2.png'

export const Navbar = () => {
    const [openMenu, setOpenMenu]=useState(false)
  return (
    <div>
        <div className={ openMenu? "nav_cont active":"nav_cont"}>
            <h1 className='nav_log'><img src={logo}/></h1>
            <div className="log_nav_icons">
                <FaAlignJustify className='bar-icon'onClick={()=>setOpenMenu(true)}/>
                <FaTimes className='cross-icon' onClick={()=>setOpenMenu(false)} />
            </div>
            <div className="nav_link_con">
                <div className="left_nav_con">  
                 
                    <p className='active'>Home </p>
                    <p>Companies </p>
                    <p>About </p>   
                    <p>Testimonials</p>
                    <p>Contact Us </p>
                </div>
              
            </div>         
        </div>

    </div>
  )
}
