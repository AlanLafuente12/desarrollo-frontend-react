import { useState } from "react";

const useForm = (initialValues) => {
    const [values, setValue] = useState(initialValues);
    const handleChange = (event) => {
        // obtener el nuevo valor
        const { name, value } = event.target;
        setValue(
            {
                // obtener los valores anteriores
                ...values,
                // sobreescribir el nuevo valor
                [name]: value
            }
        )
    }
    const resetForm = () => {
        setValue(
            {
                ...initialValues
            }
        )
    }
    return [values, handleChange, resetForm];
}
export default useForm;