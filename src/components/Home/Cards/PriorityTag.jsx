export default function PriorityTag({ Priority }) {
    const priorityStyles = {
        0: <span className="flex h-fit w-fit py-[4px] pt-[6px] px-[16px] items-center text-[13.33px] rounded-md bg-low text-low-text font-semibold ">Baixa Prioridade</span>,
        1: <span className="flex h-fit w-fit py-[4px] pt-[6px] px-[16px] items-center text-[13.33px] rounded-md bg-mid text-center text-mid-text font-semibold">Média Prioridade</span>,
        2: <span className="flex h-fit w-fit py-[4px] pt-[6px] px-[16px] items-center text-[13.33px] rounded-md bg-high text-high-text font-semibold">Alta Prioridade</span>,
        3: <span className="flex h-fit w-fit py-[4px] pt-[6px] px-[16px] items-center text-[13.33px] rounded-md bg-[#F27F77] text-highs-text font-semibold">Altíssima Prioridade</span>,
    };

    return priorityStyles[Priority] || <span className="text-gray-500">Unknown Priority</span>;
}