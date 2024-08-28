import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

const Navbar = () => {


    const data = useSelector((state) => state.formReducerRef.formData);
    const saludo = data.username === '' || data.email === '' ? 'Inicie sesión': 
        `Bienvenido ${data.username.charAt(0).toUpperCase()+data.username.slice(1)}: ${data.email}`;
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/default">Home</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/form">Form</Link>
                </li>
                <li>
                    <Link to="/">Landing</Link>
                </li>
                <li className='user-data'>
                    <Link to="/form" style={{fontWeight: "normal"}}>{saludo}</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;