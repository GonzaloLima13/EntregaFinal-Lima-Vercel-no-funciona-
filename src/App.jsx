import { Navbar } from "./components/Navbar/Navbars";
import { Footer } from "./components/Footer/Footer";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Detail } from "./pages/Detail"
import { Home } from "./pages/Home"
import { GameGenre } from "./pages/Category"
import { CartProvider } from "./state/Cart.context";
import { ThemeProvider } from "./state/Theme.context";
import { Cart } from "./pages/Cart";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}> { }
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<Detail />} />
      <Route path="/genres/:genreId" element={<GameGenre />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={routes} />
          <Footer />
        </CartProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
