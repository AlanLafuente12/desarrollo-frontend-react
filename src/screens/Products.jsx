import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setProducts}  from "../redux/product/productActions";
import FilterableProductTable from './Products/_components/FilterableProductTable';
import { motion }from "framer-motion";
import { useState } from 'react';

const Default = () => {
    // obtener el los datos almacenados de productos
    const data = useSelector((state) => state.productReducerRef.PRODUCTS);
    // almacenar datos de productos
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            setProducts([
                { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
                { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
                { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
                { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
                { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
                { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
            ])
        )
    }, []);

    // manejar los cambios de estados de productos
    const [productos, setProductos] = useState([]);
    // cargar almacenados al array
    useEffect(() => {
        setProductos(data)
    }, [data]);
    // funcion para filtrar el array de productos
    const filterProducts = (texto, stock) => {
        let productosFiltrados = data.filter((producto) => 
            producto.name.toLowerCase().includes(texto.toLowerCase()))
        if (stock){
            productosFiltrados = productosFiltrados.filter((producto) => 
                producto.stocked === true);
        }
        setProductos(productosFiltrados);
    }

    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }} className='container'>
            <FilterableProductTable products={productos} filter={filterProducts} >
            </FilterableProductTable>
        </motion.div>
    );
}
export default Default;