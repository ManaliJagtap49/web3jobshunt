import React from 'react'
import { FaCalendarAlt,FaFilter } from "react-icons/fa";

const Jobs = ({jobsdata}) => {
   
  return (
    
    <div>
        <div className="job_main_con">
            <img src={jobsdata.imgUrl} alt="company Logo" />
            <div className="job_details_main_con">
            <div className="job_details">
                <h2>{jobsdata.jobTitle}</h2>
                <p>{jobsdata.compEmail}</p>
                <div className="more_detaisl">
                    <p> <FaCalendarAlt /> {jobsdata.pDate}  |</p>
                    <p> <FaFilter />{jobsdata.jPost}</p>

                </div>

            </div>
            <div className="jon_apply_btn">
                <a href={jobsdata.apply}  target='_blank'>APPLY</a>
            </div>

            </div>
           
        </div>

    </div>
  )
}

export default Jobs