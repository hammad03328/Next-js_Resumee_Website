import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '@/Components/Button';
import Image from 'next/image';

interface PortfolioData {
  items: {
    sys: { id: string };
    fields: {
      profile: any;
    };
    // add more fields here
  }[];
}


const Getdata = async () => {
  try {
    const pro_data = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_TOKEN_ID}&content_type=profile`
    );
    if (!pro_data.ok) {
      console.log('Failed to Load');
      throw new Error('Failed to Load');
    }
    return pro_data.json();
  } catch (err) {
    console.log(err);
  }
};

const Profilee = () => {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Getdata();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div className='text-white'>Loading...</div>;
  }

  return (
    <>
    <div className='mt-14'>
    <div className='text-white'><div className='xs:text-2xl sm:text-3xl font-bold mx-4'>Profile</div></div>
    <div className='text-justify w-full h-auto  border-bor border-2 bg-black mt-10 transition-all duration-300 hover:border-pri'>
          <div className='static md:flex place-items-center'>
              <div className='basis-3/12 md:m-7 xs:content-center xs:pt-8 sm:pt-0'>
                 <div className='xs:flex justify-center space-y-2'><Image src="/Profile/mpf.png" alt="pp" width={180} height={50}/></div>
              </div>

              <div className='basis-10/12 m-7 text-white '>
                 <p>
                 {data.items.map((item)=>(
        <div key={item.sys.id}>
            <h4 className=' text-lg text-gray-200'>{documentToReactComponents(item.fields.profile)}</h4>
        </div>
    )
    )}

                 </p>
                      <div className=' grid grid-cols-2 mt-3 space-x-3a gap-3 leading-8'>
                        
                        <div className='sm:flex gap-2 text-white text-justify order-1'><div className='text-pri'>Age </div><div className=''> 23</div></div>
                        <div className='sm:flex gap-2 text-white order-1'><div className='text-pri'>Freelance </div><div>Available</div></div>
                        <div className='sm:flex gap-2 text-white order-1'><div className='text-pri'>Phone </div><div>+92-3328-281458</div></div>
                        
                        
                        <div className='sm:flex gap-2 text-white order-2'><div className='text-pri'>Resident </div><div>Pakistan</div></div>
                        <div className='sm:flex gap-2 text-white order-2'><div className='text-pri'>Address </div><div>Karachi, Pakistan</div></div>
                        <div className='sm:flex gap-2 text-white order-2'><div className='text-pri'>E-mail </div><div>Hammad.Wahab</div></div>
                        
                      </div >
                      <div className='flex xs:justify-center sm:justify-start'><div className='w-36 mt-8'><Button text={"Download CV"} link={"helo"}/></div></div>
              </div>
          </div>
        </div></div>
    
    
    
    </>
  ); // main return bracket
};

export default Profilee;
