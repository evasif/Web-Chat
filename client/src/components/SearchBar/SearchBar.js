import React from 'react';

const SearchBar = ({ onInput}) => {
  return (
    <input type="text" class="input input-big" onInput={(e) => onInput(e)}/>
  );
};

export default SearchBar;
