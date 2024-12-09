import { Note } from '@renderer/types/Note';
import { Save, XIcon } from 'lucide-react'
import { FC } from 'react'

const NoteTab:FC<{index?:number, selected?:boolean, note:Note}> = ({index, selected = false, note}) => {

  const saved = true;

  return (
    <button className={` ${!saved && "border-b-red-400 border"} drop-shadow-md shadow ${index === 0 && 'rounded-tl-xl' } ${selected ? "text-slate-50 bg-slate-500 hover:bg-slate-600" : "bg-slate-100 hover:bg-slate-300"}  min-w-[80px] flex items-center justify-between p-2 titlebar-button`}>
      <p>{note.title}</p>
      <button className='hover:bg-slate-400 rounded-full p-1 transition-all hover:text-slate-50 '>
        {saved ? <XIcon size={14} /> : <Save size={14} className='text-red-400'/> }

      </button>
    </button>
  )
}

export default NoteTab
