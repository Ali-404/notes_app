import { createBrowserRouter, RouteObject } from "react-router-dom";
import AppLayout from "./AppLayout";
import NoteEditor from "./screens/NoteEditor";

const RoutesConfig:RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {
          path: "/",
          element: <NoteEditor />
        }
    ]
  },
]


const Routes = createBrowserRouter(RoutesConfig);

export default Routes;

