import React, { useState,useRef } from 'react'
import logo from '../../assets/logo2.png'
import './search.css'
import { FaSearch } from "react-icons/fa";

export const SearchJob = () => {


    const suggestions = [
        'Developer',
        'Marketing',
        'Artist',
        'Engineering',
        'Management',
        'Operations',
        'Frontend Developer',
        'Design',
        'Product',
        'Community Management'
    ];
	const [isFocus, setIsFocus] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const inputRef = useRef();
	const [inputValue, setInputValue] = useState("");
    return (
        <div>
            <div className="search_job_main_con">
                <div className="search_job_details">
                    <img src={logo} alt='logo' />
                    <p>Jobs³ connects the best candidates in the Web3 space with projects at the forefront of the sector.<br /><br/>
                        We know this bear market sucks for everyone. We know small projects are hurting but are still looking for the best talent. We know that high recruitment prices are a barrier to that.<br /><br/>
                        That’s why we offer 7 day job posts for free.<br /><br/>
                        From Discord Mods to Engineering Leads, every job is welcome.</p>
                </div>
                <div className="search_jobs_input">
                    <div className="search_job_title">
                        <h1>Search <span>jobs</span> </h1>

                    </div>
                    <div className="search_job_input_field">
                        <input type='text' placeholder='Job Title, Keywords, or Phrase' 
                        onFocus={() => setIsFocus(true)}
						onBlur={() => {
							if (!isHovered) {
								setIsFocus(false);
							}
						}}
						value={inputValue}
						onChange={(e) => {
							setInputValue(e.target.value);
						}}
						ref={inputRef}
                       />
                        <select>
                            <option>All</option>
                            <option>Advisor</option>
                            <option>AI</option>
                            <option>Analyst</option>
                            <option>Data Scientist</option>
                            <option>Artist</option>
                            <option>#D Artist</option>
                        </select>
                        <button> <FaSearch /></button>

                    </div>
                    { isFocus && (
                        <div className="suggestions" 
                        onMouseEnter={() => {
                            setIsHovered(true);
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false);
                        }}
                        >
                        {suggestions.map((suggestion, index) => {
								const isMatch =
									suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) >
									-1;
								return (
									<div key={index}>
										{isMatch && (
											<div
												className="p-5 hover:bg-gray-200 cursor-pointer"
												onClick={() => {
													setInputValue(suggestion);
													inputRef.current.focus();
												}}
											>
												{suggestion}
											</div>
										)}
									</div>
								);
							})}
                    </div>         

                    )

                    }
                          
                </div>
              
            </div>
        </div>
    )
}
