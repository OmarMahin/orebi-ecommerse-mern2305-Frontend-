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
import BadRequest from "./pages/BadRequest";
import Change_User_Password from "./pages/Change_User_Password";
import EmailVerify from "./pages/EmailVerify";
import Forget_Password from "./pages/Forget_Password";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(<Route path="/" element={<RootLayout />}>
        <Route index element = {<Home></Home>}></Route>
        <Route path="/products" element = {<Products></Products>}></Route>
        <Route path="/about" element = {<About></About>}></Route>
        <Route path="/admin" element = {<AdminPage></AdminPage>}></Route>
        <Route path="/admin_login" element = {<AdminLoginPage></AdminLoginPage>}></Route>
        <Route path="/forget_password" element = {<Forget_Password></Forget_Password>}></Route>
        <Route path="/forget_password/:id" element = {<Change_User_Password></Change_User_Password>}></Route>
        <Route path="/verifyUser/:id" element = {<EmailVerify></EmailVerify>}></Route>
        <Route path="/bad_request" element = {<BadRequest></BadRequest>}></Route>
        <Route path="/sign_up" element = {<SignUp></SignUp>}></Route>
        <Route path="/login" element = {<Login></Login>}></Route>
        <Route path="*" element = {<PageNotFound></PageNotFound>}></Route>

      </Route>)
    );

    return <RouterProvider router={router}/>;
}

export default App;
