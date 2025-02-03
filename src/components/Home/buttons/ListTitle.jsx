import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import { BsFillXCircleFill } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { AiFillDelete } from 'react-icons/ai';


export default function ListTitle({title, updateTitle,type, listId,deleteList }) {
    const [state, setState] = useState(false);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [prompt, setPrompt] = useState(false);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState(title);

    function handleClick() {
        setState(!state);
    }
    
    useEffect(() => {
        if (state && inputRef.current) {
            inputRef.current.focus();
        }
    }, [state]);

    async function handleKeyDown(event) {
        if (event.key === 'Enter') {
            await new Promise((resolve) => {
                setInputValue(inputValue);
                resolve();
            });
            updateTitle(inputValue);
            setState(false);
        }
    }

    function handleDotClick(event) {
        event.stopPropagation(); 
        setShowContextMenu(!showContextMenu);
    }

    function handleRename() {
        setShowContextMenu(false);
        setState(true);
    }

    function handleDelete(listId) {
        setShowContextMenu(false);
        console.log("Listaid",listId);
        console.log('Delete clicked');
        deleteList(listId);
        setPrompt(false);
    }

    function ContextMenu({ onRename, onDelete, onClose, listId }) {
        return (
            <div className="absolute top-4 left-4 bg-gray text-white border border-gray-200 rounded shadow-lg z-10">
                <div className="p-2 bg-none hover:bg-gray-100 cursor-pointer" onClick={onRename}>
                    Rename
                </div>
                <div className="p-2 text-red hover:bg-gray-100 cursor-pointer" onClick={() => onDelete(listId)}>
                    Delete
                </div>
            </div>
        );
    }

    function TitleList() {
        return (
          <>
            {prompt && (
                <div className="fixed  inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="bg-back p-4 w-[370px] flex flex-col text-white  rounded-lg border  z-50">
                <div className="flex justify-end" onClick={() => setPrompt(false)}>
                <BsFillXCircleFill className=" cursor-pointer w-[24px] h-[24px]"/>
                </div>
                <div className="flex pr-8 flex-col justify-start">
                <h6 className="font-semibold">Tem certeza que deseja deletar {title}?</h6>
                <p className="mt-2">Essa ação não é reversível.</p>
                <div
                    onClick={() => {deleteList(listId);}}
                    className="cursor-pointer mt-4 flex flex-row items-center gap-2 hover:bg-[#4E4E4E]"
                >
                    <AiFillDelete className="mb-1 text-red" />
                    <p className="text-red font-semibold">Deletar</p>
                </div>
                </div>
                </div>
            </div>
        )}

            {state ? (
              <input
                onClick={handleClick}
                ref={inputRef}
                value={inputValue}
                onChange={(e) => {
                setInputValue(e.target.value);}}
                className="outline-none px-2 w-[445px] border h-fit border-white rounded-[8px] font-bold text-white"
                placeholder=""
                onKeyDown={handleKeyDown}
              />
            ) : (
              <div className="flex w-[445px] justify-between relative">
                <h6 onClick={handleClick} className="flex font-bold cursor-pointer text-white">
                  {title}
                </h6>
                <div onClick={handleDotClick} className="flex cursor-pointer relative">
                  <BsThreeDots className="text-white" />
                  {showContextMenu && (
                    <ContextMenu
                      onRename={handleRename}
                      onDelete={() => setPrompt(true)}
                      onClose={() => setShowContextMenu(false)}
                      listId={listId}
                    />
                  )}
                </div>
              </div>
            )}
          </>
        );
      }

    function NewList() {
        return (
            <>
                {state ? (
                    <div onClick={handleClick} className="justify-start gap-2 transition-200 rounded-[4px]">
                        <input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className=" block w-full text-white border bg-none border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Task">
                        </input>
                    </div>
                ) : (
                    <button onClick={handleClick} className="flex h-fit p-[10px] pr-[200px] font-semibold justify-start gap-2 hover:bg-[#4E4E4E] transition-200 rounded-[4px]">
                        <BsFillPlusCircleFill className="mb-1 text-white fill-white" />
                        <p className="text-white">Nova Lista</p>
                    </button>
                )}
            </>
        );
    }

    function TaskTitle() {
        return (
            <>
                {state ? (
                    <input
                        onClick={handleClick}
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="outline-none text-3xl px-2 w-[445px] border h-fit border-white rounded-[8px] text-white"
                        placeholder=''
                        onKeyDown={handleKeyDown}
                    />
                ) : (
                    <h3 onClick={handleClick} className="text-white text-2xl font-bold">{title}</h3>
                )}
            </>
        );
    }

    switch (type) {
        case "ListTitle":
            return TitleList();
        case "NewList":
            return NewList();
        case "TaskTitle":
            return TaskTitle();
        default:
            return TitleList();
    }
}