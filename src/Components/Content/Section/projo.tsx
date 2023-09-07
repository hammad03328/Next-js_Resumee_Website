import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';


interface PortfolioData {
  items: {
    sys: { id: string };
    fields: {
      heading: string;
      desc: any;
      link: string;
      image:{
        sys:{id:string}
      };
    };
    // add more fields here
  }[];
  includes: {
    Asset: {
      sys: { id: string };
      fields: { file: { url: string } };
    }[];
  };
}


const Getdata = async () => {
  
  try {
    const pro_data = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_TOKEN_ID}&content_type=resumee`
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

const Projo = () => {
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
        <div className='mt-14'>
          <div className='pt-14 text-white'><div className='xs:text-2xl sm:text-3xl font-bold mx-6'>Work</div>
                    <div className=' grid xs:grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-16 mt-8'>
                        {data.items.map((item) => {
                             const idat=data.includes.Asset.find((img:any)=>img.sys.id===item.fields.image.sys.id)
                             const img_url=idat?.fields.file.url

                                return(
                                    <div key={item.sys.id} className=' border-bor border-2 group transition-all duration-500 hover:border-pri shrink-0  bg-black flex items-center flex-col pt-6 pb-2 px-4'>
                                        <a href={item.fields.link}>
                                            <div className='relative overflow-hidden'>
                                            <div className='absolute rounded-md bg-bor mt-96 group-hover:mt-0 scroll w-full h-full bg-opacity-90 opacity-100 transition-all duration-300 text-pri flex items-center justify-center'><p className='text-2xl font-semibold'><Image className='pl-4' src="/link.svg" alt="pp" width={90} height={40}/>GoTo Site</p></div>
                                            <Image className='rounded-md ' src={`https:${img_url}`} alt="pp" width={410} height={40}/>
                                            </div>
                                            <h4 className='font-semibold text-xl pt-4 text-center text-gray-300'>{item.fields.heading}</h4>
                                            <h4 className='font-semibold text-lg pt- text-center text-gray-200'>{documentToReactComponents(item.fields.desc)}</h4>
                                        </a>   
                                    </div>
                                )
                            } //map bracket
                        )}
                    </div>
            </div>
        </div>
  ); // main return bracket
};

export default Projo;
