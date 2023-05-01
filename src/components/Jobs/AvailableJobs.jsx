import React from 'react'
import './availablejobs.css'
import { JobsData } from '../Data/jobsData'
import Jobs from './Jobs';

const AvailableJobs = () => {
    const data =JobsData;
  return (
    <div>
        <div className="available_jobs_main_con">
        <div className="trusted_by_heading">
                <h1>All Available <span>Web3 Jobs</span></h1>
            </div>
            <div className="separater"></div>
        </div>
        <div className="all_available_job_con">
             {data.map((jobsdata)=>{
                return(
                    <Jobs jobsdata={jobsdata} />
                )
             })}
        </div>

        


    </div>
  )
}

export default AvailableJobs