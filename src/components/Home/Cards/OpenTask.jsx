import CloseTaskButton from "../buttons/CloseTaskButton";
import ListTitle from "../buttons/ListTitle";
import FinishTaskButton from "../buttons/FinishTaskButton";
import DateButtonChanger from "../buttons/DateButtonChanger";
import PriorityDropdown from "../DropDown/PriorityDropdown";
import DescriptionTextBox from "../TextBox/DescriptionTextBox";
import { AiFillDelete } from "react-icons/ai";
import { BsFillXCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {toast} from 'react-toastify';
import SnackBar from "../../utils/SnackBar";
import FileButton from "../buttons/FileButton";


export default function OpenTask({ task, onTaskUpdate, onTaskDelete,files }) {
  const [prompt, setPrompt] = useState(false);
  const notify = () => toast(<SnackBar/>,{
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    closeButton: false,
  });

    OpenTask.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      finishAt: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      listId: PropTypes.string.isRequired,
      isFinished: PropTypes.bool.isRequired,
    }).isRequired,
    onTaskUpdate: PropTypes.func.isRequired,
    onTaskDelete: PropTypes.func.isRequired,
  };

  // Local state to track changes
  const [changes, setChanges] = useState({
    title: task.title,
    description: task.description,
    finishAt: task.finishAt,
    priority: task.priority,
    listId: task.listId,
    isFinished: (task.isFinished === null || task.isFinished=== undefined) ? false : Boolean(task.isFinished) ,
  });

  
  useEffect(() => {
    onTaskUpdate({ ...task, ...changes });
  }, [changes]); 

  const handleChange = (field, value) => {
    setChanges((prevChanges) => ({
      ...prevChanges,
      [field]: value,
    }));
    handleTaskUpdate(); 
  };

  // Propagate changes to the parent
  const handleTaskUpdate = () => {
    onTaskUpdate({ ...task, ...changes });
  };
  
  const handleDelete = () => {
    setPrompt(true);
    };

  // Close the task and reset state
  const closeTask = () => {
    onTaskUpdate(null);
  };

  // Delete the task
  const deleteTask = (id) => {
    onTaskDelete(id);
    onTaskUpdate(null);
    notify();
  };

  return (
    <div>

    <div> 
        {prompt && (
         <div className="fixed inset-0 flex items-center justify-center z-50">
         <div className="fixed inset-0 bg-black opacity-50"></div>
         <div className="bg-back p-4 w-[370px] flex flex-col text-white  rounded-lg border  z-50">
           <div className="flex justify-end" onClick={() => setPrompt(false)}>
           <BsFillXCircleFill className=" cursor-pointer w-[24px] h-[24px]"/>
           </div>
           <div className="flex pr-8 flex-col justify-start">
           <h6 className="font-semibold">Tem certeza que deseja deletar {task.title}?</h6>
           <p className="mt-2">Essa ação não é reversível.</p>
           <div
             onClick={() => {deleteTask(task.id);}}
             className="cursor-pointer mt-4 flex flex-row items-center gap-2 hover:bg-[#4E4E4E]"
           >
             <AiFillDelete className="mb-1 text-red" />
             <p className="text-red font-semibold">Deletar</p>
           </div>
           </div>
         </div>
       </div>
     )}
   </div>
   <div
      className="bg-back z-20 border border-r-0 border-b-0
                         border-t-0 border-l-white gap-2 flex
                         h-[100vh]"
    >
      <div onClick={closeTask} className="ml-2 mt-16 flex flex-col">
        <CloseTaskButton />
      </div>

      <div className="flex flex-col pl-6 pr-16 w-[430px]  md:px-6">
        <div className="flex mt-4 justify-end">
          <FinishTaskButton isFinished={changes.isFinished} finished={(newFinished) => handleChange("isFinished", newFinished)} />
        </div>

  <div className="flex flex-col mt-10 justify-center w-full max-w-[430px]">
    <ListTitle
      title={changes.title}
      type="TaskTitle"
      updateTitle={(newTitle) => handleChange("title", newTitle)}
      className=""
    />
    <hr className="text-[#4E4E4E] mt-4 mb-2"></hr>

    <div className="flex flex-col gap-4 mr-4 max-w-[430px]">
      <div className="flex flex-row justify-start gap-16 w-full">
        <p className="text-white font-semibold mt-2 ">Data de Conclusão</p>
        <DateButtonChanger 
        date={changes.finishAt} 
        onDateChange={(newDate) => handleChange("finishAt", newDate)} />
      </div>

      <div className="flex flex-row justify-between ">
        <p className="text-white  font-semibold truncate">Prioridade</p>
        <div className="border border-[#4E4E4E] p-1 rounded-md">
        <PriorityDropdown
          Priority={changes.priority}
          onPriorityChange={(newPriority) => handleChange("priority", newPriority)}
        />
      </div>
      </div>
      <hr className="text-[#4E4E4E] mb-2"></hr>
    </div>

    <div className="flex flex-col break-all mt-4 max-w-[430px] sm:max-w-[473px]">
      <p className="text-white  font-semibold mb-4">Descrição</p>
      <DescriptionTextBox
        text={changes.description}
        onTextChange={(newDescription) => handleChange("description", newDescription)}
        className="w-full max-w-[430px]"
      />
    </div>
    <hr className="text-[#4E4E4E] mt-2 mb-2"></hr>

    {/* Files */}
    <p className="text-white font-semibold">Arquivos</p>
      <div className="flex flex-col gap-2">
        {files.map((file,index) => (
          <FileButton key={index + 'file'} file={file}  />
        ))}
      </div>
    <hr className="text-[#4E4E4E] mt-2 mb-2"></hr>

    <div onClick={handleDelete} className="cursor-pointer mt-4 flex flex-row items-center gap-2 hover:bg-[#4E4E4E] w-full">
      <AiFillDelete className="mb-1 text-red" />
      <p className="text-red font-semibold">Deletar</p>
    </div>
  </div>
</div>
      
    </div>
    </div>
  );
}