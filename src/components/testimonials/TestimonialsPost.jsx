import React from 'react'


export const TestimonialsPost = ({community}) => {
    return (
        <div className='compost'>
            <p>{community.comment} </p>
            <b> {community.pname}</b>
            <p>{community.pabout}</p>
        </div>
    )
}
