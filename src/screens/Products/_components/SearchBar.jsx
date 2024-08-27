import { useState } from 'react';
import { useEffect } from 'react';

const SearchBar = ({ filter }) => {

  // manejar los estados del texto a buscar y el filtrado por stock
  const [checkState, setcheckState] = useState(false);
  const [searchedText, setSearchedText] = useState('');

  // alternar el valor del filtrado por stock
  const changeCheckValue = () => {
    setcheckState(!checkState)
  }

  // cambiar el valor de texto a buscar
  const changeText = (event) => {
    const { value } = event.target;
    setSearchedText(value);
  }
  
  // escuchar si cambia el valor del inputbox o el checkbox
  useEffect(() => {
    // realizar el filtrado
    filter(searchedText, checkState);
  }, [searchedText, checkState]);

    return (
      <form>
        <input type="text" placeholder="Buscar..." 
          value={searchedText}
          onChange={changeText}/>
        <label>
          <input type="checkbox" 
          value={checkState}
          onChange={changeCheckValue}/>
          Solo productos en stock
        </label>
      </form>
    );
}

export default SearchBar;