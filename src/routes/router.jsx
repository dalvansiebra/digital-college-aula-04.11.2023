import { createBrowserRouter } from "react-router-dom"
import HomeView from "../Home/HomeView"
import AboutMe from "../Views/AboutMe/AboutMe"
import App from "../App"
import MyServices from "../Views/MyServices/MyServices"
import MySkills from "../Views/MySkills/MySkills"

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomeView />
            },
            {
                path: '/about',
                element: <AboutMe />
            },
            {
                path: '/services',
                element: <MyServices />
            },
            {
                path: '/skills',
                element: <MySkills />
            }
        ]
    }
])

export default router