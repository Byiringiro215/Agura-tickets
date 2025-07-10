import React from 'react'

interface CardProps{
    icon?:React.ReactNode,
    title:string,
    description:string
}


const WhyusCard = ({icon,title,description}:CardProps) => {
  return (
    <div className='flex flex-col gap-2 justify-start font-bold bg-[#101010] rounded-md w- h-[8rem] p-3'>
      <span className='text-primary'>{icon}</span>
      <h1 className='text-sm text-primary'>{title}</h1>
      <p className='text-xs text-[#CDCDE0] font-semibold'>{description}</p>
    </div>
  )
}

export default WhyusCard
