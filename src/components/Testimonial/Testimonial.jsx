import { useState } from "react";

const Testimonial = () => {

    const [currentindex, setCurrentindex] = useState(0);
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            message: 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            message: 'Success is not final, failure is not fatal: It is the courage to continue that counts.'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            message: 'The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.'
        },
        {
            id: 4,
            name: 'Mike Brown',
            message: 'You are capable of more than you know. If you push yourself to try new things, you’ll be amazed at what you can achieve.'
        },
        {
            id: 5,
            name: 'Emily Wilson',
            message: 'Difficult roads often lead to beautiful destinations. Keep going, and you will find your way.'
        }
    ];
    

    const handdleClickPrev = () => {
        setCurrentindex((currentindex + testimonials.length -1) % testimonials.length) 
    }
    
    const handdleClickNext = () => {
        setCurrentindex((currentindex + 1) % testimonials.length) 
    }
  return (
   <>
   <h1>A simple quote generator</h1>
   <div className=" bg-[#e8faff]  h-[300px]  py-10 flex-col px-4 w-[70%] shadow-lg">
 <div className=" flex items-center justify-center flex-col  h-[80%] ">
 <div className="  text-[22px]   italic  mb-3 text-[#666]">
    {testimonials[currentindex].message}
   </div>
    <div className="text-[18px]  mb-3 text-[#333] font-bold">
    -{testimonials[currentindex].name}
    </div>
 </div>
    <div className=" flex items-center  justify-between gap-6">
        <button className=" text-[#fff] p-[20px] cursor-pointer text-[16px] bg-[#82e5ee] rounded-[5px]"  onClick={handdleClickPrev}>Previous</button>
        <button className=" text-[#fff] p-[20px] cursor-pointer text-[16px] bg-[#82e5ee] rounded-[5px]" onClick={handdleClickNext}>next</button>
    </div>
   </div>
   </>
  )
}

export default Testimonial;