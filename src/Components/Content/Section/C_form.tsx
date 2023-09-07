// import React from 'react'
import { useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

interface IFormInput 
{
    name: string;
    email: string;
    message: string;
}

function C_form() {
    
    const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e:any) => 
  {
        // e.preventDefault();
      if(form.current && process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!== undefined && process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID !== undefined)
      {
        
         emailjs.sendForm(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY)
         .then((result) => 
         {
             console.log(result.text);
            // onSubmit(e: IFormInput);
         }, 
         (error) => 
         {
             console.log(error.text);
         });
        }
    };

    function onSubmit(data: IFormInput) 
    {
     console.log(data);
     handleClick();
    }
    const 
    {   register,
        handleSubmit,
        resetField,
        formState: { errors }
    } = useForm<IFormInput>();
      
      const handleClick = () =>
      {  
        resetField("name");
         resetField("email")
         resetField("message"); 
      }
    
      return (
        <div className='overflow-hidden mt-28 text-white'><div className='xs:text-2xl sm:text-3xl font-bold mx-6'>Contact Form</div>
        <div className='sm:flex rounded-md focus:border-pri border-4 bg-opacity-80 group -ml-[10a0%] w-full h-auto  border-bor bg-black mt-10 transition-all duration-300 hover:border-pri'>
        <div className='sm:hidden sm:w-1/3a xs:h-28 sm:h-32 xs:flex items-center bg-bor sm:rounded-r-md'><svg className='opacity-60 w-72 xs:h-24 sm:h-32 my-auto m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"fill="#4bffa5"/></svg></div>    
        <div className=' sm:w-2/3'>
          {/* <form ref={form} onSubmit={sendEmail}> */}
          <form ref={form} onSubmit={handleSubmit((data) => {
            sendEmail(data);
            onSubmit(data);
        })}>

                <div className='w-auto h-auto xs:px-6 md:px-9 mt-8 sm:ml-4'>
                <input className=' bg-black  text-white w-full focus:ring-0 focus:outline-none' placeholder='Name'
                    {...register("name", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Z a-z]+$/i
                    })}
                />
                {errors?.name?.type === "required" && <p className='text-red-500'>This field is required</p>}
                {errors?.name?.type === "maxLength" && (<p className='text-red-500'>Name cannot exceed 20 characters</p>)}
                {errors?.name?.type === "pattern" && (<p className='text-red-500'>Alphabetical characters only</p>)}
                </div>
                <div className='xs:px-2 md:px-0 h-8 -mt-1'><svg viewBox="0 -0.8 500 20" preserveAspectRatio="none"><rect x="5%" y="8" width="90%" height="2" fill="#07170f" /></svg></div>
                
                <div className='w-auto h-auto xs:px-6 md:px-9 mt-6 sm:ml-4'>
                <input className=' bg-black  text-white w-full focus:ring-0 focus:outline-none' placeholder='E-mail'{...register("email", {required:true})} />
                {errors?.email?.type === "required" && <p className='text-red-500'>This field is required</p>}
                </div>
                <div className='xs:px-2 md:px-0 h-8 -mt-1'><svg viewBox="0 -0.8 500 20" preserveAspectRatio="none"><rect x="5%" y="8" width="90%" height="2" fill="#07170f" /></svg></div>


                <div className='w-auto h-auto xs:px-6 md:px-9 mt-8 sm:ml-4'>
                <textarea className='  resize-y scrollbar-thin scrollbar-thumb-bor bg-black  text-white w-full mr-4 caret-pri outline-none mt-2 h-auto ' placeholder='Type Your Message...' {...register("message",{required:true})} />
                {errors?.message?.type === "required" && <p className='text-red-500'>This field is required</p>}
                
                </div>
                <div className='xs:px-2 md:px-0 h-8 -mt-1'><svg viewBox="0 -0.8 500 20" preserveAspectRatio="none"><rect x="5%" y="8" width="90%" height="2" fill="#07170f" /></svg></div> 

        
            <input className="xs:flex sm:justify-start  mb-4 ml-10 xs:justify-center bg-black px-4 py-1 font-extrabold text-lg text-white text-center font-mono rounded-tl-lg rounded-br-lg cursor-pointer transition-all duration-150 hover:bg-[#1cca73] hover:text-black active:bg-[#076033] active:text-white ring-2 ring-[#4bffa5] ring-opacity-50"  type="submit" value="Send"/>
            
          </form>
          </div>
          <div className='xs:hidden md:blocka sm:w-1/3 h-auto xs:flex-none sm:flex items-center bg-bor sm:rounded-r-md'><svg className='opacity-60 w-72 h-auto my-auto m-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"fill="#4bffa5"/></svg></div>
          </div></div>
        
      );
}

export default C_form