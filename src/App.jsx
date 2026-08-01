import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

export const App = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);
