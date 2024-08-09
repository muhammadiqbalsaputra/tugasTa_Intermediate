import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './landingPage';
import BookForm from './bookForm';
import Navbar from './navbar';
import EditBookForm from './editBookForm';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/tambah" element={<BookForm />} />
          <Route path="/edit/:id" element={<EditBookForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
