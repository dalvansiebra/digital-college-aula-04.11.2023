import { createBrowserRouter } from "react-router-dom"
import HomeView from "../Home/HomeView"
import AboutMe from "../Views/AboutMe/AboutMe"
import App from "../App"
import MyServices from "../Views/MyServices/MyServices"
import MySkills from "../Views/MySkills/MySkills"
import Portfolio from "../Views/Portfolio/Portfolio"
import Contact from "../Views/Contact/Contact"
import Dashboard from "../Views/Dashboard/Dashboard"

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
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
])

export default router