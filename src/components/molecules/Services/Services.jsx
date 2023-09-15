import React from "react"
import Carousel from "../../atoms/carousel";
import image1 from './cbak1.jpg'


export const Services = () => {
  return (
    <div>
      <div className="bak" style={{ backgroundImage: `url(${image1})` }}>
     <Carousel /></div>
  </div>
     
  )
}
export default Services;