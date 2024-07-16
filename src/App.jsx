import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./component/layout/RootLayout";
import About from "./pages/About";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(<Route path="/" element={<RootLayout />}>
        <Route index element = {<Home></Home>}></Route>
        <Route path="/products" element = {<Products></Products>}></Route>
        <Route path="/about" element = {<About></About>}></Route>
        <Route path="/admin" element = {<AdminPage></AdminPage>}></Route>
        <Route path="/admin_login" element = {<AdminLoginPage></AdminLoginPage>}></Route>
      </Route>)
    );

    return <RouterProvider router={router}/>;
}

export default App;
