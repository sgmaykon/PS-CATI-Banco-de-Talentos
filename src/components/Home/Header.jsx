import ProfileButton from "./buttons/ProfileButton"
import Logo from "../../assets/Logo-Peugeot.png"
import NotificationButton from "./buttons/NotificationButton"

export default function Header() {
   return(  
   <div>
    <nav class="bg-gray-800 ">
        <header>
        <div className="w-full border-[#4E4E4E] fixed top-0 px-12 py-4 justify-between items-center flex bg-[#5B5B5B4D] backdrop-blur-lg z-10" > 
            <div className="flex-row gap-2 flex">
                <img className="flex h-16 w-14" src={Logo} alt="Logo Peugeot" />
                    <div className="flex flex-col justify-center sticky text-white font-bold items-start"> 
                        <p className="">Peugeot</p>
                        <p> Tasks</p>
                    </div>
            </div>
            <div className="flex items-center gap-2 justify-center">
                <div className="items-center">
                <NotificationButton Notification={false} />
                </div>
                <ProfileButton userName="José" />
            </div>
           
        </div>
        </header>
    </nav>
</div>
)

}
