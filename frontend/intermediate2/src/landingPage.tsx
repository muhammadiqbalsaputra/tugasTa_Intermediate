import React, { useEffect, useState } from 'react';
import axios from './utils/axios';
import BookCard from './bookCard';

interface Book {
  id: number;
  title: string;
  author: string;
  deskripsi: string;
  tahunTerbit: number;
  gambar?: string;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/books');
        setBooks(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Error fetching books');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = (id: number) => {
    setBooks(books.filter(book => book.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Daftar Buku</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            deskripsi={book.deskripsi}
            tahunTerbit={book.tahunTerbit}
            gambar={book.gambar}
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
