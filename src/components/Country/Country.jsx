import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../utils/Api.js';

function Country() {
  const params = useParams();
  const [data, setData] = useState({
    name: { common: '' },
    flags: { png: '' },
    capital: [''],
    maps: { googleMaps: '' },
    population: 0,

  });

  useEffect(() => {
    api.getCountry(params.name)
      .then(((res) => setData(res[0])))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {data.population !== 0 ? (
        <div className="flex flex-col items-center w-full gap-5">
          <h1 className="text-center font-bold text-5xl text-blue-900 pt-4 pb-2">
            {data.name.common}
          </h1>
          <div className="flex gap-4 w-full flex-col items-center">
            <img className="w-1/2" src={data.flags.png} alt={`flag ${data.name.common}`} />
            <div
              className="w-1/2 box-border border-blue-900 border-4 rounded-md p-5 text-blue-900 items-center flex flex-col gap-3 text-2xl bg-blue-100"
            >
              <p>
                {`The capital of ${data.name.common} is ${data.capital[0]}`}
              </p>
              <p>
                {`Population: ${data.population}`}
              </p>
              <a
                href={data.maps.googleMaps}
                className="text-blue-400 hover:text-blue-600 transition duration-300"
                target="_blank"
              >
                Country on map
              </a>
            </div>
          </div>
          <Link
            to="/"
            className="box-border p-4 border-2 border-blue-900 text-2xl rounded-md text-blue-900 bg-blue-100 hover:text-white hover:bg-blue-900 transition duration-300"
          >
            На главную
          </Link>
        </div>
      ) : (
        <div className="w-full h-lvh flex justify-center items-center">
          <div className="spinner" />
        </div>
      )}
    </>
  );
}

export default Country;
