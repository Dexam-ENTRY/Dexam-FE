import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, RootLayout } from "./layouts";
import { LoginPage } from "./pages/loginpage";
import { SelectPage } from "./pages/SelectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/select",
            element: <SelectPage />,
          },
        ],
      },
    ],
  },
]);
