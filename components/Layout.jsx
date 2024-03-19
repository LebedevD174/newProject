const React = require('react');
const Navbar = require('./ui/Navbar');

module.exports = function Layout({ title, user, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/style/reset_style.css" />
        <link rel="stylesheet" href="/style/style.css" />
        <script src="/scripts/signUp.js" defer />
      </head>
      <body>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
};
