import PriorityTag from "../Cards/PriorityTag";
import {useState} from 'react';
import {BsCaretDownFill} from 'react-icons/bs';
import {BsCaretUpFill} from 'react-icons/bs';


export default function PriorityDropdown({Priority, onPriorityChange}) { 
    const [show, setShow] = useState(false);
    const [priority, setPriority] = useState(Priority);

    function handleClick(){
        setShow(!show);
    }

    function changePriority(selectedPriority){
        setPriority(selectedPriority);
        onPriorityChange(selectedPriority);
        setShow(false);
    }

    return(
        <>
          <div className="transition-transform duration-500 translate-y-0">
            {show ?( 
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <PriorityTag Priority={priority}/>
                    <BsCaretUpFill onClick={handleClick} className="text-white"/>
                  </div>
                <div onClick={() => changePriority("0")} className="cursor-pointer">
                  <PriorityTag Priority="0" />
                </div>
                <div onClick={() => changePriority("1")} className="cursor-pointer">
                  <PriorityTag Priority="1" />
                </div>
                <div onClick={() => changePriority("2")} className="cursor-pointer">
                  <PriorityTag Priority={"2"} />
                </div>
                <div onClick={() => changePriority("3")} className="cursor-pointer">
                  <PriorityTag Priority={"3"} />
                </div>
              </div>
            )
            : ( 
                <div className="flex items-center justify-between gap-2">
                <PriorityTag Priority={priority}/>
                <BsCaretDownFill onClick={handleClick} className="text-white"/>
                </div>
            )}
            </div>
        </>
    );
}