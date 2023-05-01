import React from 'react'
import why1 from '../../assets/why1.png'
import why2 from '../../assets/why2.png'
import './whyjobhunt.css'
export const WhyJobHunt = () => {
    return (
        <div className='why_web3_job_hunt_main'>
            <div className="trusted_by_heading">
                <h1>Why Web3<span>Job</span>Hunt</h1>
            </div>
            <div className="separater"></div>
            <div className="why_web3jobhunt_main_con">
            <div className="why_title">
                <h3>Jobs³ is created by people in Web3 for people in Web3. We understand the frustrations of finding people who understand and want to work in the space.</h3>

            </div>

            <div className="why_web3jobhunt">
                <div className="why_con">
                    <img src={why1} alt='why' />
                    <h2>Trusted Employers</h2>
                </div>
                <div className="why_con">
                    <img src={why2} alt='why' />
                    <h2>The Latest Roles</h2>
                </div>
                <div className="why_con">
                    <img src={why1} alt='why' />
                    <h2>Various Packages</h2>
                </div>

            </div>

            </div>
         

        </div>
    )
}
