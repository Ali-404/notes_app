import { FC } from 'react'
import { RouterProvider } from 'react-router'
import Routes from './routes'

const App: FC = () => {


  return (
    <RouterProvider router={Routes} />
  )
}

export default App
