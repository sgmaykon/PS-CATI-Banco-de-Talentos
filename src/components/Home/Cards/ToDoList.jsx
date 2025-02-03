import ListTitle from "../buttons/ListTitle"

export default function ToDoList ({children,title,updateTitle,listId,deleteList}) {
    return (
        <>
        <div className="flex flex-col gap-[12px] max-w-[401px] min-h-[859px] sm:min-w-[477px] border-[1px] justify-start px-[16px] pt-[16px] pb-[24px] border-[#4E4E4E] rounded-[12px]">
            <div className="flex flex-row py-2 justify-between">
               <ListTitle title={title} 
               type="ListTitle" 
               updateTitle={updateTitle} 
               listId={listId} 
               deleteList={deleteList}/>
            </div>

            <div className="flex flex-col justify-start gap-4">
                {children}
            </div>
        </div>
        </>
    )
}