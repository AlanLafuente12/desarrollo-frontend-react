import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

const ProductTable = ({ products }) => {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th style={{textAlign:"right"}}>Precio</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
export default ProductTable;