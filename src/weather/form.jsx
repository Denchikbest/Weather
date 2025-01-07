import React from 'react';

const Form = ({ weatherMethod }) => {
  return (
    <form className='form' onSubmit={weatherMethod}>
      <input className='form' type="text" name="city" placeholder="Введите город" />
      <button className='formit' type="submit">Получить погоду</button>
    </form>
  );
};

export default Form;
