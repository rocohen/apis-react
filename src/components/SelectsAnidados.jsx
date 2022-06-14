import React, { useState } from 'react';
import SelectList from './SelectList';

const SelectsAnidados = () => {
  const [province, setProvince] = useState('');
  const [town, setTown] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [suburb, setSuburb] = useState('');

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Argentina</h3>
      <SelectList
        title='provincias'
        url='https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre'
        handleChange={(e) => {
          setProvince(e.target.value);
        }}
      />
      {province && (
        <SelectList
          title='departamentos'
          url={`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${province}&campos=id,nombre&max=1000`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}

      {town && (
        <SelectList
          title='localidades'
          url={`https://apis.datos.gob.ar/georef/api/localidades?departamento=${town}&campos=id,nombre&max=1000`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}

    </div>
  );
};

export default SelectsAnidados;
