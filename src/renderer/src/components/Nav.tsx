import  { FC, useState } from 'react'
import NoteTab from './NoteTab'
import { IconButton } from '@mui/joy'
import { Copy, Minus, Plus, XIcon } from 'lucide-react'
import { Note } from '@renderer/types/Note'




const Nav:FC = () => {


  const [notes, setNotes] = useState<Note[]>([
    // {
    //   id: 1,
    //   title: "Title",
    //   content: "content",

    // }
  ])

  const closeApp = ():void => {
    // check first if there is a file in edit mode
    // show alert
    window.electron.ipcRenderer.send("close-app");
  }

  const maximizeOrMinimize = ():void => {
    window.electron.ipcRenderer.send("press-max-min");
  }

  const minimize = ():void => {
    window.electron.ipcRenderer.send("press-minimize")
  }

  return (
    <nav className=' bg-slate-200 flex items-center titlebar '>
      <p className='w-[50px] text-center'>ALI</p>
      <div className='flex-1 flex items-center '>

        {notes.map((note,i) => (
          <NoteTab key={i} selected index={i} note={note} />
        ))}


        <div className='ml-1'>
        <IconButton size='sm' className='titlebar-button '>
          <Plus size={14} />
        </IconButton>
        </div>
      </div>


      {/* control btns */}
      <div className='flex items-center justify-center pr-2'>
        <IconButton onClick={minimize} size='sm' variant='plain' className='titlebar-button' >
          <Minus size={14}  />
        </IconButton>
        <IconButton onClick={maximizeOrMinimize}  size='sm' variant='plain' className='titlebar-button' >
          <Copy size={14}  />
        </IconButton>
        <IconButton onClick={closeApp} color='danger' size='sm' variant='plain' className='titlebar-button' >
          <XIcon size={14} />
        </IconButton>
      </div>
  </nav>
  )
}

export default Nav
