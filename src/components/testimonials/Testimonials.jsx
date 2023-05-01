import React from 'react'
import { TestimonialsPost } from './TestimonialsPost'
import { TestimonialsData } from '../Data/TestimonialsData'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './testimonials.css'
export const Testimonials = () => {
    const data = TestimonialsData;
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
    <div className='ourcommunity'>

            <div className="trusted_by_heading">
                <h1>Hear from our <span>community</span></h1>
            </div>
            <div className="separater"></div>
    <div className="comcon">
     
      <Carousel responsive={responsive}>

      {data.map((community)=>{
        return(
          <TestimonialsPost community={community}/>
        )
      })}
</Carousel>
     
    </div>
   

</div>
  )
}
