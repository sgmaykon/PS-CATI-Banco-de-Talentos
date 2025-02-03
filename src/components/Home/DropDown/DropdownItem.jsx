import PenIcon from '../../assets/PenIcon.svg'

export default function DropdownItem({type = "Default"}) {
    function handleClick (){

    }
    
    if(type==="Default")
    return (
        <>
        <div className='bg-back flex flex-row items-center hover:bg-[#4E4E4E]'
            onClick={handleClick}>
            <img src={PenIcon} className="" /> 
            <p className="text-white">Renomear</p>
        </div>
        </>
    )
    
    else
    if(type=="Danger")
        return (
            <>
                <div className='bg-back flex flex-row items-center hover:bg-[#4E4E4E]'
                    onClick={handleClick}>
                    <img src={PenIcon} className="fill-red" /> 
                    <p className="text-red">Renomear</p>
                </div>
                </>
    
        )
    }