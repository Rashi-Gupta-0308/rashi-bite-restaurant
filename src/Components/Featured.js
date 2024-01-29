import React, {useState} from 'react'
import { BsChevronCompactLeft,  BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


const Featured = () => {
    const sliders = [
      {
        url: 'https://images.unsplash.com/photo-1566222498830-b2bb2934ac3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
        {
            url: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            url: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          
      
        ]

        const [currentIndex, setCurrentIndex] = useState(0)
        const prevSlider = ()=>{
            const isFirstSlide = currentIndex === 0
            const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex -1
            setCurrentIndex(newIndex)
           }  
           
           const nextSlider = ()=>{
            const isLastSlide  = currentIndex === sliders.length -1
            const newIndex = isLastSlide  ? 0: currentIndex + 1
            setCurrentIndex(newIndex)
           }
    
           const moveToNextSlide = (slideIndex) =>{
            setCurrentIndex(slideIndex)
           }

  return (
    <div className='max-w-[1540px] h-[500px] w-full m-auto py-4 px-4 relative group'>
    <div className='w-full h-full rounded-2xl bg-center bg-cover duration-300'
         style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
    ></div>
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlider}/>
    </div>
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={ nextSlider}/>
    </div>
    <div  className='flex top-4 justify-center py-2'>
         {
            sliders.map((sliderItems, slideIndex)=>(
               <div 
                key={slideIndex}
                onClick={()=>moveToNextSlide (slideIndex)}
               className='text-2xl cursor-pointer'>
                <RxDotFilled/>
               </div>
            ))
         }
    </div>
</div>
)
}

export default Featured