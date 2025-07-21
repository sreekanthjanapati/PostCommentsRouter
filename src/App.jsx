import './App.css'
import AppLayout from './layouts/AppLayout'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/home'
import PostLists, { postLoader } from './pages/post-list'
import PostComments from './pages/post-comments'
import {PostLoaderForComments} from './pages/post-comments'

const router = createBrowserRouter([
   {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/posts",
        element: <PostLists/>,
        loader: postLoader
      },
      {
        path:"/posts/:postId", 
        element: <PostComments/>,
        loader: PostLoaderForComments
      },
    ]
   }
])

function App() {

  return (
    <RouterProvider router={router}/>
   
  )
}

export default App
