import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { NavBar, ItemCount, ItemListContainer, Item } from "./components";
import { Detail } from "./pages/Detail"
import { Home } from "./pages/Home"
import { Category } from "./pages/Category"

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}> {}

        <Route path="/" element={<Home />} />
         <Route path="/item/:id" element={<Detail />} />
         <Route path="/category/:id" element={<Category />} />
    

    </Route>
  )
);

function App() {
  return (
    <div>
    <RouterProvider router={routes} />
    <footer>Derechos reservados para GLGames</footer>
    </div>
  )
}

export default App
