import { Drawer, List,ListItem, ListItemButton, ListItemContent, ListItemDecorator, Typography } from '@mui/joy'
import { Book, NotepadText, Plus } from 'lucide-react'
import  { Dispatch, FC, SetStateAction } from 'react'

const NotesDrawer:FC<{state:[boolean, Dispatch<SetStateAction<boolean>>] }> = ({state:[open, setOpen]}) => {
  return (

    <Drawer  open={open} onClose={() => setOpen(false)}>
        <div className='w-full h-full flex flex-col p-8'>
          <div className='flex items-center w-full gap-2'>
            <Book/><Typography level='title-lg'>Notes</Typography></div>


          <List className="flex" >
            <ListItem>
            <ListItemButton>
              <ListItemDecorator><NotepadText/></ListItemDecorator>
              <ListItemContent>Home</ListItemContent>
            </ListItemButton>
            </ListItem>


            <ListItem>
            <ListItemButton>
              <ListItemDecorator> <Plus/> </ListItemDecorator>
              <ListItemContent>Add Note</ListItemContent>
            </ListItemButton>
            </ListItem>
          </List>


        </div>
    </Drawer>
  )
}

export default NotesDrawer
