import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const ServicesCards = ({service}) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <div className='h-[220px] overflow-hidden'>

    <Image
      src={service.img}
      alt="Shoes" width={450} height={100}  />
      </div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{service.title}</h2>    
    <div className="card-actions justify-between items-center">
        <h6 className='text-primary font-semibold'>Price: ${service.price}</h6>
      <button className="btn btn-primary rounded-full"><FaArrowRight /></button>
    </div>
  </div>
</div>
  )
}

export default ServicesCards