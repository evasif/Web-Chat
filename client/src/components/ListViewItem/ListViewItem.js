import React from 'react';

const ListViewItem = ({ info }) => {
  const { id, title, shortDescription, category} = info;
  return (
    <li key={id} className="list-view-item">
      <h3>{title}</h3>
      <p>{shortDescription}</p>
      <p>{category}</p>
    </li>
  );
}
