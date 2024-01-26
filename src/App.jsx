import { RouterProvider, createBrowserRouter } from "react-router-dom";

import WelcomePage from "./pages/Welcome.jsx";
import ChallengesPage from "./pages/Challenges.jsx";

import Authentication from "./pages/Authentication.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
    errorElement: <p> Page not found</p>,
  },

  { path: "/challenges", element: <ChallengesPage /> },

  { path: "/auth", element: <Authentication /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
