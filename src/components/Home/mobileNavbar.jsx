import {BsBellFill} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import { useState, useEffect } from 'react';

export default function MobileNavbar(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return(
        <>  {isMobile && (
            <div className=" fixed bottom-0 left-0 right-0 max-w-[430px] h-[60px] flex flex-row justify-evenly items-center z-100 bg-back border-t-[1px] border-[#4E4E4E]">
                <div className="bg-back flex gap-20 " >

                <button className="text-white cursor-pointer flex ">
                    <AiOutlineHome className="fill-white" />
                </button>

                <button className="text-white cursor-pointer flex  ">
                    <BsBellFill className="fill-white" />
                </button>
                <button className="text-white cursor-pointer flex ">
                    <BsPersonFill className="fill-white" />
                </button>
                </div>
            </div>
        )}
        </>
    )

}