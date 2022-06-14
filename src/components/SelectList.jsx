import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Loader from './Loader';
import Message from './Message';

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  //console.log(data, error, loading);

  if (!data) return null;
  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText} bgColor="#dc3545"`}
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data[title];

  const getSingularTitle = (title) => {
    if(title === "provincias") return `Seleccioná una ${title.slice(0, -1)}`;
    if(title === "departamentos") return `Seleccioná un ${title.slice(0, -1)}`;
    if(title === "localidades") return `Seleccioná una ${title.slice(0, -2)}`;
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={title} id={id} onChange={handleChange}>
        <option value=''>
          {getSingularTitle(title)}
        </option>
        {data &&
          options.map((el) => (
            <option key={el.id} value={el.id}>
              {el.nombre}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectList;
