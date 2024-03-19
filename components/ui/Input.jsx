const React = require('react');

module.exports = function Input({ content, type, label }) {
  return (
    <div className='input'>
      <label htmlFor={`${content}`}>{label}</label>
      <br />
      <input name={`${content}`} id={`${content}`} type={`${type}`} placeholder={`Введите ${label}`} />
    </div>
  );
};
