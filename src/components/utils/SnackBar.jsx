import {BsCheckCircleFill} from 'react-icons/bs'
import {BsXLg} from 'react-icons/bs'


export default function SnackBar() {
    return(
        <>
        <div className="bg-[#252628] p-2 border gap-2 w-fit h-fit border-white rounded-[12px] flex justify-center " >
            <div className="flex items-center gap-2">
                <BsCheckCircleFill className="mb-1 text-[#029008]"/>
                <p className="text-[#029008]">Lista deletada com sucesso!</p>
            </div>
            <div className="mt-[2px]">
            <BsXLg className="text-[#029008]" />
            </div>
        </div>
        </>

    );

}