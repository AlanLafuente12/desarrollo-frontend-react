import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = ({ products, filter }) => {
    return (
      <div>
        <SearchBar filter={filter}/>
        <ProductTable products={products} />
      </div>
    );
}

export default FilterableProductTable;