import React, { useEffect, useState } from 'react';
import api from '../../utils/Api.js';
import Item from '../Item/Item.jsx';

function Main() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    api.getAllCountries()
      .then((res) => setCountries(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-5xl text-blue-900 pt-4 pb-4">
        Страны
      </h1>
      <div className="flex flex-wrap gap-3 box-border justify-center pt-4 pb-4">
        {
          countries.map((countryData, index) => <Item data={countryData} key={index} />)
        }
      </div>
    </div>
  );
}

export default Main;
