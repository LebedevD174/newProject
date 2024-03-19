const React = require('react');
const Layout = require('../Layout');

module.exports = function CategoriesPage({ title, categories, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>{title}</h1>
      <div className="prod_cont flex">
        {categories.map((el) => (
          <a className="pd flex column" href={`/category/${el.id}`} key={(el.id)}>
            {el.name}
          </a>
        ))}
      </div>
    </Layout>

  );
};
