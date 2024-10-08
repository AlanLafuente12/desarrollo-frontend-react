
import { createBrowserRouter } from 'react-router-dom';
import Default from "../screens/Default";
import Products from "../screens/Products";
import LandingPage from "../screens/LandingPage";
import LoginForm from "../screens/Forms/LoginForms";
import App from "../App";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react' : '/';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/forms',
                element: <LoginForm />,
            },
        ]
    }
],
{
    basename: basename
}
);

export default routes;