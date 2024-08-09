import React, { useState } from 'react';
import axios from './utils/axios'; 

const BookForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState<number | ''>(2000);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/books', {
        title,
        author,
        tahunTerbit: year,
        deskripsi: description,
        gambar: image,
      });
      console.log('Book added successfully:', response.data);
      
      setTitle('');
      setAuthor('');
      setYear(2000);
      setDescription('');
      setImage('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-lg shadow-lg ">
      <h2 className="text-xl font-bold mb-4">Tambah Buku Baru</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Judul</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Penulis</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Tahun Terbit</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Deskripsi</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full rounded"
          rows={4}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">URL Gambar</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-400"
      >
        Tambah Buku
      </button>
    </form>
  );
};

export default BookForm;
