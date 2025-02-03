import UserIcon from '../../../assets/UserIcon.svg'

export default function ProfileButton({ userName }) {
    return(
        <>
            <button className="bg-transparent flex pl-4 pr-7 justify-center text-center hover:bg-[#4E4E4E] duration-250 group text-white rounded-[12px] py-1 h-fit">
                <img src={UserIcon} alt="User Icon" className="h-[28px]  w-[28px] mr-2 inline-block transition-transform group-hover:translate-y-[2px] duration-400" style={{filter: 'brightness(0) invert(1)'}} />
                <p className="flex-row mt-1 font-bold flex transition-transform group-hover:translate-y-1 duration-400">{userName}
                </p>
            </button>
        </>
    )
}