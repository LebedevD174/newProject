const React = require('react');

module.exports = function Navbar({
  type, label, name, place = 'Введите',
}) {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <br />
      <input type={type} placeholder={`${place} ${label}`} name={name} id={name} />
    </div>
  );
};
