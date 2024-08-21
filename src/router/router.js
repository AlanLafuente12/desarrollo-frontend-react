
import { createBrowserRouter } from 'react-router-dom';
import Default from "../screens/Default";
import Products from "../screens/Products";
import App from "../App";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Products />,
            },
        ]
    }
]);

export default routes;