import React from 'react'
import { FaCopyright, FaMedium, FaLinkedin, FaEnvelope, FaTelegram ,FaTwitter} from "react-icons/fa";
import img from '../../assets/Blue.png'
import './footer.css'

export const Footer = () => {
    return (
        <div className='log_footer_bg'>
            <div className="log_footer_con">
                <div className="log_img_con">
                    <img src={img} alt="Logo" />

                </div>
                <div className="log_cr_con">
                    <h2><FaCopyright className='copy_icon' />2023 Web3JobsHunt</h2>
                    <p>All Rights Reserved.</p>

                </div>
                <div className="log_sm_con">
                    <h1><a href='https://twitter.com/web3jobshunt' target="_blank"><FaTwitter /></a></h1>
                    <h1> <a href=' https://www.linkedin.com/company/web3jobhunt' target="_blank" ><FaLinkedin /></a></h1>
                    <h1><a href='https://medium.com/@web3jobshunt' target="_blank"><FaMedium /></a></h1>
                    {/* <h1><a href=''><FaPhoneAlt /></a></h1> */}
                    <h1><a href='https://t.me/Web3jobshunt' target="_blank"><FaTelegram /></a></h1>


                </div>
            </div>

        </div>
    )
}
