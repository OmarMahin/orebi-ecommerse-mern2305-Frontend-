import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./component/layout/RootLayout";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<RootLayout />}>
      <Route index element = {<Home></Home>}></Route>
    </Route>)
  );

  return <RouterProvider router={router}/>;
}

export default App;
