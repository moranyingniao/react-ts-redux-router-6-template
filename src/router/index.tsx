import { Navigate } from 'react-router-dom'
import About from "../components/About";
import Home from "../components/Home";
import Myapp from '../components/Myapp';


export interface RouteObject {
    caseSensitive?: boolean;
    children?: RouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
    auth?: boolean;
}
const router: RouteObject[] = [
    {
        path: '/',
        element:<Myapp/>,
        children: [
            {
                index: true,
                element: <Navigate to='/home' />
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/about',
                element:<About/>
            }

        ]
    }

]


export default router;