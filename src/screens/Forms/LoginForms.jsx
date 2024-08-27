import useForm from "../../hooks/useForm"
import { useSelector, useDispatch } from "react-redux";
import { saveFormData, clearFormData } from "../../redux/form/formActions";
import { motion }from "framer-motion";
import ModalInfo from "../../components/ModalInfo";
import ModalConfirm from "../../components/ModalConfirm";
import { useState, useEffect } from "react";

const LoginForm = () => {
    const dispatch = useDispatch();
    // almacenar reactivamente los valores del formulario
    const [formValues, handleFormChange, resetForm] = useForm({ username: '', email: '', pass: ''});


    /* MODAL CONFIRMACION LOGOUT */

    // manejar los estados de visible/oculto del modal
    const [modalConfirmVisibility, setModalConfirmVisibility] = useState(false);
    // manejar los estados del mensaje del modal
    const [modalConfirmMessage, setmodalConfirmMessage] = useState('');
    // funcion para ocultar el modal
    const hideModalConfirm = () => {
        setModalConfirmVisibility(false);
    };
    // funcion para mostrar el modal
    const showLogoutModal = () => {
        setModalConfirmVisibility(true);
        setmodalConfirmMessage("¿Está seguro que quiere cerrar sesion?");
    }
    // obtener los datos almacenados del usuario
    const stored_form = useSelector(state => state.formReducerRef);
    // manejar los estados de login
    const [logged, setLogged] = useState(
        // asignar el estado de login dependiendo si existe un username/email
        !(stored_form.formData.username === '' || stored_form.formData.email === '')
    );
    // funcion para confirmar logout desde el modal abierto
    const logout = () => {
        setLogged(false);
    }
    // funcion para escuchar el cambio de estado de login a false
    useEffect(() => {
        if (logged === false) {
            dispatch(clearFormData())
            resetForm(); // limpiar el formulario
        }
    }, [logged]);


    /* REALIZAR LOGIN */

    // funcion para verificar si el password ingresado coincide con el almacenado
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formValues.username != '' && formValues.email != '' && formValues.pass != ''){
            if (formValues.pass === stored_form.pass){
                setLogged(true); // cambiar el estado de login 
                dispatch(saveFormData(formValues)); // almacena los datos del formulario
                changemodalInfoOptions("success","Password correcto"); // establece la info del modal
                resetForm(); // limpiar el formulario
            }
            else{
                changemodalInfoOptions("warning","Password incorrecto"); // establece la info del modal
            }
        }
        else{
            changemodalInfoOptions("warning","Complete todos los campos"); // establece la info del modal
        }
        setModalInfoVisibility(true);
    }


    /* MOSTRAR/OCULTAR PASSWORD */
    
    // manejar los estados de visible/oculto password
    const [passwordButtonState, setpasswordButtonState] = useState('Show');
    // funcion para pasar el input de password de visible a oculto y viceversa
    const changePasswordButtonState = () => {
        document.getElementById("pass").type = passwordButtonState==='Show'?'text':'password';
        setpasswordButtonState(passwordButtonState==='Show'?'Hide':'Show');
    };

    
    /* MODAL DE INFORMACION */

    // manejar los estados de visible/oculto del modal
    const [modalInfoVisibility, setModalInfoVisibility] = useState(false);
    // funcion para ocultar el modal
    const hideModalInfo = () => {
        setModalInfoVisibility(false);
    };
    // manejar los estados de las opciones del modal
    const [modalInfoOptions, setmodalInfoOptions] = useState({type:'', message:''});
    // funcion para modificar las opciones del modal
    const changemodalInfoOptions = (type, message) => {
        modalInfoOptions.type = type;
        modalInfoOptions.message = message;
        setmodalInfoOptions(modalInfoOptions);
    };


    return (
        
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>
            
            <ModalInfo 
                visible={modalInfoVisibility}
                message={modalInfoOptions.message}
                onClose={hideModalInfo}
                type={modalInfoOptions.type}
            />
            <ModalConfirm
                visible={modalConfirmVisibility}
                message={modalConfirmMessage}
                onClose={hideModalConfirm}
                onConfirm={logout}
            />
            
            <div className="form-container">


                <form onSubmit={handleSubmit}>
                    <h2>Login Form</h2>
                    <h5>Username: {stored_form.formData.username}</h5>
                    <div>
                        <label htmlFor="username">
                            Username
                        </label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            value={formValues.username}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="username">
                            Email
                        </label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="pass">
                            Password
                        </label>
                        <input 
                            type="password"
                            id="pass"
                            name="pass"
                            value={formValues.pass}
                            onChange={handleFormChange}
                        />
                        <button type="button" onClick={changePasswordButtonState}>{passwordButtonState}</button>
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <a className="link" onClick={showLogoutModal}><p>Logout</p></a>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}
export default LoginForm;