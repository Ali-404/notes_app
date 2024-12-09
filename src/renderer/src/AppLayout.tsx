import { IconButton, Tooltip } from '@mui/joy'
import { FileUp, NotepadText, Settings } from 'lucide-react'
import { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import NotesDrawer from './components/NotesDrawer'

const AppLayout:FC = () => {

  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div  className='flex flex-col h-screen overflow-hidden bg-slate-200 rounded-xl'>
      {/* navbar */}
     <Nav />
      {/* main section */}
      <section className='flex-1 flex-grow flex w-full bg-slate-200'>

        {/* side nav */}
        <nav className='h-full  w-[50px] flex flex-col p-2  text-slate-100 gap-2'>
            <IconButton variant='soft' onClick={() => setDrawerOpen(true)} >
              <Tooltip title="Notes">
                <NotepadText  />
              </Tooltip>
            </IconButton>
            <IconButton variant='soft' >
              <Tooltip title="Open File..">
                <FileUp  />
              </Tooltip>
            </IconButton>


            {/* spacer */}
            <div className='flex-1'></div>
            {/* bottom */}
            <IconButton variant='soft' >
              <Tooltip title="Settings">
                <Settings  />
              </Tooltip>
            </IconButton>


          <NotesDrawer state={[drawerOpen, setDrawerOpen]} />

        </nav>




        {/* main container */}
        <div className='flex-1 h-full  bg-slate-100 drop-shadow-md '>
          <Outlet />
        </div>

      </section>
    </div>
  )
}

export default AppLayout
