import {useState} from 'react'
import BellIcon from '../../../assets/Bell.svg'


export default function NotificationButton({HasNotification}) {
    const [pressed,setPressed] = useState(false)
    function handleClick(){
        setPressed(!pressed)
    }
    return (
        <>
        <div className="relative"> 
        <img src={BellIcon} alt="Notification" 
        className={`cursor-pointer h-6 w-6 mb-1 transition-transform 
                hover:bg-[#4E4E4E] 
                duration-250 hover:translate-x-[-2px]
                ${pressed ? 'bg-[#343333]' : 'bg-transparent'}
                `} 
        onClick={handleClick}/>
       
        </div>

        {Notification === true && (
            <div className="absolute top-8 right-43 h-3 w-3 bg-red rounded-full">
            </div>)}
        </>
    )
}

