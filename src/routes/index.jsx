import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Logout from "../pages/Logout"
import Register from "../pages/Register"
import Answers from "../pages/Answers"
import Quiz from "../pages/Quiz"
import Result from "../pages/Result"
import Topic from "../pages/Topic"
import PrivateRoutes from "../components/PrivateRoutes"


export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        element: <PrivateRoutes />,
        children : [
          {
            path: "/answers",
            element: <Answers />,
          },
          {
            path: "/quiz/:id",
            element: <Quiz />,
          },
          {
            path: "/result/:id",
            element: <Result />,
          },
          {
            path: "/topic",
            element: <Topic />,
          }
        ]
      }
    ]
  }

]