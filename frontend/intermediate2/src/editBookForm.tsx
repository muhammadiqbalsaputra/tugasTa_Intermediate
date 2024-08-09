import React, { useEffect, useState } from 'react';
import axios from './utils/axios'; 
import { useParams, useNavigate } from 'react-router-dom';

const EditBookForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState<number | ''>(2000);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/books/${id}`);
        const book = response.data.data;
        setTitle(book.title);
        setAuthor(book.author);
        setYear(book.tahunTerbit);
        setDescription(book.deskripsi);
        setImage(book.gambar || '');
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/books/${id}`, {
        title,
        author,
        tahunTerbit: year,
        deskripsi: description,
        gambar: image,
      });
      alert('Buku berhasil diperbarui');
      navigate('/');
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Error updating book');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-lg shadow-lg ">
      <h2 className="text-xl font-bold mb-4">Edit Buku</h2>
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
        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-orange-400 hover:transition-transform hover:rounded-lg hover:ease-in-out"
      >
        Update Buku
      </button>
    </form>
  );
};

export default EditBookForm;
