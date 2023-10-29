interface LGridProps {
    letter: string;
    value: number;
  }

function LetterGrid({letter, value} : LGridProps){
    return (
        <div className={`aspect-square flex justify-center items-center 
            border-2 border-gray-300 text-gray-700 uppercase text-xl font-semibold 
            ${value === 0 && 'bg-slate-50'} ${value === 1 && ' bg-yellow-400'} 
            ${value === 2 && 'bg-[rgb(100,209,67)]'} ${value === 3 && 'bg-[rgb(97,95,95)]'}
            ${value !== 0 && 'text-white'}`}>
            {letter}
        </div>
    )
}

export default LetterGrid