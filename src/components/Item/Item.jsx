import React from 'react';
import { Link } from 'react-router-dom';

function Item({ data }) {
  return (
    <Link to={`/${data.name.common.toLowerCase()}`} className="item flex w-1/4 justify-center items-center box-border p-5 border-blue-900 rounded-md border-2 text-xl bg-blue-100 text-blue-900 hover:text-white hover:bg-blue-900 transition duration-300">
      {data.name.common}
      {' '}
      {data.flag}
    </Link>
  );
}

export default Item;
