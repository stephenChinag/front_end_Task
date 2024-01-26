import { RouterProvider, createBrowserRouter } from "react-router-dom";

import WelcomePage from "./pages/Welcome.jsx";
import ChallengesPage from "./pages/Challenges.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/challenges", element: <ChallengesPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
