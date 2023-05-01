import React from 'react'
import './home.css'
import web1 from '../../assets/web1.png'

export const Home = () => {
  return (
    <div>
        <div className="main_home_con">
            <div className="home_left">
                <h2>THE SMARTEST WAY TO BUILD YOUR <span>WEB3</span> CAREER</h2>
                <p>We’re offering all projects, no matter their size, the opportunity to post jobs for free for 7 days. That’s not an offer. That’s forever.</p>
                <div className="home_btn_con">
                    <button className='post_a_job_btn'>Post a Job</button>
                    <button className='find_a_job_btn'>Find a Job</button>
                </div>

            </div>
            <div className="home_right">
                <img src={web1} alt='Web1 Image' />

            </div>
        </div>

    </div>
  )
}
