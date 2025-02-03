import {BsFillCalendarWeekFill} from 'react-icons/bs'
import DatePicker from "react-datepicker";
import { useState } from 'react';

export default function DateButtonChanger(date, onDateChange) {
    const [newDate, setDate] = useState(date.date);
    function formatDate(date) {
        const mes = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
        const [part] = date.split('T');
        const [year, month, day] = part.split('-');
        const monthname = mes[parseInt(month)-1]
        return `${day} ${monthname}, ${year}`
    }

    function formatChangeDate(date) {
        const mes = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
        const [year, month, day] = date.split('-');
        const monthname = mes[parseInt(month)-1]
        return `${day} ${monthname}, ${year}`
    }

    function formatDateDDMMYYYY(date) {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    }

    function handleClick() {
        onDateChange(newDate);
    }
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="border border-[#4E4E4E] max-w-[140px] p-1 rounded-[8px] hover:bg-[#4E4E4E] flex justify-between" onClick={() => setIsEditing(true)}>
            <div className="flex flex-row z-10 text-white items-center px-1">
                <BsFillCalendarWeekFill className="text-white mb-1 mr-1" />
                {isEditing ? (
                    <input
                        type="date"
                        value={newDate}
                        onChange={(e) => setDate(e.target.value)}
                        onBlur={() => {
                            setIsEditing(false);
                            handleClick();
                        }}
                        autoFocus
                    />
                ) : (
                    <span>{formatDate(newDate)}</span>
                )}
            </div>
        </div>
    );

}