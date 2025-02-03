import { AiOutlinePaperClip } from "react-icons/ai";

export default function FileCount({count}) {
  return (
    <div className="flex items-center p-1 h-fit border rounded-sm border-[#4E4E4E] gap-2">
      <AiOutlinePaperClip className="text-white mb-1"/>
      <p className="text-white">{count} arquivos</p>
    </div>
  );
}