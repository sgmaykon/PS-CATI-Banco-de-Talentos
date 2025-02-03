import {BsFillPlusCircleFill} from  'react-icons/bs'

export default function NewTaskButton() {
    return( 
        <>
            <button className="flex w-fit items-center p-[10px] justify-start gap-2 hover:bg-[#4E4E4E] duration-500 rounded-[4px]">
                <BsFillPlusCircleFill className="mb-1 text-white fill-white"/>
                <p className="text-white">Nova Tarefa</p>
            </button>
        </>
    )

}