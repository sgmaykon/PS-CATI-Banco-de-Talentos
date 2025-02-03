import PriorityTag from "./PriorityTag"
import FinishTaskButton from "../buttons/FinishTaskButton"
import DateButton from "../buttons/DateButton"
import FileCount from "../buttons/FileCount";
import {useState,useEffect} from 'react';

export default function TaskCard({title, text,date,isFinished=false ,Priority,openTask,isMobile}) {
    const [state, setState] = useState(isFinished);

    useEffect(() => {
        setState(isFinished);
    }, [isFinished]);
    
    function Verify(date) {
        const today = new Date();
        const current = new Date(date);
    
        if (today > current) {
            return false;  
        }
        return true; 
    }
    const OnTime=Verify(date)
   
    function handleClicks(){
        console.log("click")
        setState(!state);
    }
    function handleOpen(){
        openTask(true);
    }
    
    return(
        <>
            <div className={`flex flex-col  rounded-[8px] border-[1px] border-[#4E4E4E] py-[12px] px-[8px] gap-[12px] 
                            ${state ? 'transition-opacity opacity-30' : (OnTime ? 'hover:bg-gradient-to-t from-[#232323] to-[#393939] hover:border-white  transition-opacity duration-500'
                                     : 'hover:bg-gradient-to-b from-[#381D1D] to-[#553434] hover:border-white duration-500')} `}>
                
                <div className="flex flex-row justify-between ">
                    <div onClick={handleOpen}>
                    <PriorityTag Priority={Priority}/>
                    </div>
                    <div className="sm:w-[140px] sm:z-40" onClick={handleOpen}>
                    </div>
                    {!isMobile &&(<div onClick={handleClicks}>
                        <FinishTaskButton isFinished={isFinished} />
                    </div>

                    )}
                </div>
                
                <div onClick={handleOpen} className="flex flex-col">
                    <h6 className="font-bold text-white">{title}</h6>
                    <p className="text-white break-words">{text}</p>
                <div className="flex items-center flex-row gap-4 ">
                    <DateButton date={date} OnTime={OnTime}/>
                    <FileCount count={3}/>
                </div>
                </div>
            </div>
        </>
    )

}