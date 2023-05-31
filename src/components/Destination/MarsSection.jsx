import React from 'react'

const MarsSection = () => {
  return (
    <div>
       <p className='text-white text-5xl font-bellefair pl-[30%] tracking-[5px] '>MARS</p>
      <div class="text-white border-b border-white py-4 px-8 font-bellefair ">
  <p class="mb-4 opacity-70">
   <p className='pl-3'>Don't forget to pack your hinking boots. You'll  </p>
   <p className='pl-6'> need to tackle Olympus Mons, the tallest  </p>
   <p className='pl-2'> planetary mountain in our solar system. It's two </p>
   <p className='pl-12'> and a half times of Mt. Everest </p>
  </p>
</div>
    <div className='px-20 py-6'>
      <p className='font-barlow tracking-[1px] text-white opacity-70 px-10 pb-2'>AVG DISTANCE</p>
      <p className='text-white text-2xl tracking-[3px] font-bellefair px-6'>255 MIL. Km</p>
    </div>
    <div className='px-20 '>
      <p className='font-barlow tracking-[1px] text-white px-8 opacity-70 pb-2'>EST. TRAVEL TIME</p>
      <p className='text-white text-2xl tracking-[3px] font-bellefair px-9'> 9 MONTHS</p>
    </div>
    </div>
  )
}

export default MarsSection