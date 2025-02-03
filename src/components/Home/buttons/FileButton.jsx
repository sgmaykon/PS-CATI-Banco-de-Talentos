import {AiOutlinePaperClip} from 'react-icons/ai';
import {BsFillXCircleFill} from 'react-icons/bs';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {useState, useEffect } from 'react';

export default function FileButton({file=false, Recover} ) {
 const [exist, setExist] = useState(false); 
 
 useEffect(() => {
    if (file.name === 'mockFile') {
      setExist(false);
    } else {
      setExist(true);
    }
  }, [file]);


 function handleRecover() {
    //getFile(file.id).then((response) => {
    console.log("recovered file");
 }

return (
    <> 
    {exist ? (
        <div className="border cursor-pointer border-[#4E4E4E] h-fit w-fit p-2 rounded-[8px] flex justify-between">
            <div>
                <AiOutlinePaperClip className="text-white"/>
                <p className="text-white">{file.name}</p>
            </div>
            <div>
                <BsFillXCircleFill className="text-white"/>
            </div>
        </div>
    ) : (
        <div className="border cursor-pointer border-[#4E4E4E] w-fit p-1 rounded-[8px] hover:bg-[#4E4E4E] flex justify-between">
            <div className="flex items-center px-1">
                <BsFillPlusCircleFill className="text-white mb-1 mr-2"/>
                <p className="text-white">Adicionar arquivo</p>
            </div>
        </div>
    )}
    </>
)
}