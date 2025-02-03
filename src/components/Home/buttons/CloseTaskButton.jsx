import {BsArrowBarRight} from 'react-icons/bs'
import { useState} from 'react';

export default function CloseTaskButton(){
    const [pressed, setpressed] = useState(false);

    function pressedMouse(){
        setpressed(true);
    }
    function unpressedMouse(){
        setpressed(false);
    }
    return(
        <>
        <div className={`text-white cursor-pointer w-fit  ${pressed ? 'bg-[#343333] hover:bg-[#4E4E4E] '  : ' ' }`} > 
        <BsArrowBarRight className="text-white" onMouseDown={unpressedMouse} onMouseUp={pressedMouse}
             />      
        </div>
        </>
    )

}