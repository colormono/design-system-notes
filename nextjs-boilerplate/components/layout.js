import React from 'react';
import Nav from './nav';

function Layout({ children }) {
  return (
    <div className="antialiased bg-gray-100 text-gray-900 min-h-screen">
      <div className="container mx-auto">
        <Nav />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
