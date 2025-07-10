
import { Button } from '../../components/ui/Button'

const Hero = () => {
  return (
    <div className=' flex items-center p-7'>
      <div className='flex flex-col gap-4 items-start'>
        <span className='rounded-full text-primary bg-[#101010] text-xs p-1'>Online event ticketing platform</span>
        <h1 className='text-white font=bold text-4xl'>Enjoy Endless Events Experiences <span className='block'>with <span className='text-primary'>Agura</span></span></h1>
        <p className='text-sm text-white'>Discover,purchase, and enjoy tickets for you favorite events on our seemless platform</p>
        <div className='flex items-center gap-3'>
          <Button variant='secondary'>Download Our App</Button>
          <Button variant='primary'>Get Started</Button>
        </div>
      </div>

      <div className='flex relative'>
        <img src="/left.png" alt="" className='translate-x-10' />
        <div className="relative">
          <img src="/event1.png" alt="" className="z-10" />
          <div className="flex flex-col gap-2 absolute bottom-4 left-4 z-20 bg-black bg-opacity-60 p-3 rounded">
            <span className="text-[#CDCDE0] font-bold text-sm">Summer Event</span>
            <span className="text-xs text-[#CDCDE0]">10-May-2025</span>
            <span className="text-xs text-[#CDCDE0]">Serena Hotel Kigali</span>
          </div>
        </div>
        <img src="/right.png" alt="" className='-translate-x-10'/>
      </div>
    </div>
  )
}

export default Hero
