import React from 'react'
import { services } from '@/lib/services'
import ServicesCards from '@/componants/Cards/ServicesCards'

const Services = () => {
  return (
    <div className='text-slate-800 my-12'>
        <div className="container px-3 mx-auto text-center">
            <h3 className='text-2xl text-orange-600 font-bold'>Our Services</h3>
            <h2 className=' text-4xl font-medium md:text-5xl'>Our Service Area</h2>
            <p className='max-w-[600px] mx-auto text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
              {services.map((service) => <ServicesCards key={service._id} service={service} />)}

            </div>
        </div>        
    </div>
  )
}

export default Services