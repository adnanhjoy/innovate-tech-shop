import { RouterProvider } from "react-router-dom"
import { router } from "./routes/routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
