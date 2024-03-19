const React = require('react');
const Layout = require('../Layout');

module.exports = function Error404({ title}) {
  return (
<>      
  <h2>{title}</h2>
      <div className='error'>
        <img src='https://avatars.dzeninfra.ru/get-zen_doc/1574327/pub_5e22d23ac49f2900b256fc63_5e22d24b1ee34f00ad56b2c4/scale_1200' alt='картинка' />
      </div>
    </>

  );
};