import FinishIcon from '../../../assets/FinishIcon.svg?react';
import { useState, useEffect } from 'react';

export default function FinishTaskButton({ isFinished, finished, finishTime}) {
  const [state, setState] = useState(Boolean(isFinished)); // Ensure state is a boolean

  useEffect(() => {
    setState(Boolean(isFinished));  
  }, [isFinished]);

  const handleClick = () => {
    const newstate = !state;
    setState(newstate);
    finished()
  };
  
  return (
    <button 
  onClick={handleClick} 
  className="flex items-center justify-center gap-2 group"
>
  <FinishIcon
    className={`group-hover:text-green transition-all duration-500 ${
      state ? "text-green fill-none" : "text-white fill-none"
    }`}
  />

  <div className="relative">
    {state && (
      <p className="text-green transition-all duration-500 opacity-100">
        Finalizado
      </p>
    )}

    {!state && (
      <p className="text-white group-hover:text-green transition-all duration-500 opacity-100">
        Finalizar
      </p>
    )}
  </div>
</button>
  );
}