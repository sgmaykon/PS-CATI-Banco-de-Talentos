import {BsFillCalendarWeekFill} from 'react-icons/bs'

export default function Date({date,OnTime, }) {
    function formatDate(date) {
        const mes = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
        const [part] = date.split('T');
        const [year, month, day] = part.split('-');
        const monthname = mes[parseInt(month)-1]
        return `${day} ${monthname}, ${year}`
    }
    const formatedDate = formatDate(date)

    if(OnTime) {
        return(
            <>
                <div className="flex w-fit h-fit items-center bg-[#E0E0E0] rounded-[4px] px-[4px] py-[8px] gap-[8px]">
                    <BsFillCalendarWeekFill className="text-[#4E4E4E] fill-[#4E4E4E] "/>
                    <p className="text-center text-[#646570] font-bold">{formatedDate}</p>
                </div>
            </>
        )
    }
    else {
        return(
            <>
                <div className="flex w-fit h-fit items-center  bg-[#DDA9A9] rounded-[4px] px-[4px] py-[5px] gap-[8px]">
                    <BsFillCalendarWeekFill className="mb-1 text-danger fill-danger "/>
                    <p className="text-center text-danger font-bold">{formatedDate}</p>
                </div>
            </>
        )
}
}