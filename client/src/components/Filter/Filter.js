import React from 'react';

const Filter = ({onFilter}) => {
  return (
    <div className="radio-button">
      <label>Technology</label>
      <input type="radio" name="filter" value="technology" onChange={() => onFilter('technology')}/>
      <label>News</label>
      <input type="radio" name="filter" value="world" onChange={() => onFilter('world')}/>
      <label>Financial</label>
      <input type="radio" name="filter" value="financial" onChange={() => onFilter('financial')}/>
    </div>
  );
}

export default Filter;
