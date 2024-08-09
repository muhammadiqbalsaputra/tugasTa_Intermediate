import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="mb-6 p-4 border-b bg-blue-600 shadow-lg">
      <div className="container mx-28 ">
        <Link to="/" className="text-white hover:bg-white hover:rounded-md hover:text-blue-600 hover:ease-in-out">
          Daftar Buku
        </Link>
        <Link to="/tambah" className="ml-5 text-white hover:bg-white hover:rounded-md hover:text-blue-600 hover:ease-in-out">
          Tambah Buku
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
