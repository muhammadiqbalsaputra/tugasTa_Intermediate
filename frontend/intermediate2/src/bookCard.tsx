import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from './utils/axios';

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  deskripsi: string;
  tahunTerbit: number;
  gambar?: string;
  onDelete: (id: number) => void; 
}

const BookCard: React.FC<BookCardProps> = ({ id, title, author, deskripsi, tahunTerbit, gambar, onDelete }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setShowDetails(!showDetails); 
  };

  const handleDelete = async () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus buku ini?')) {
      try {
        await axios.delete(`/books/${id}`);
        onDelete(id); 
      } catch (error) {
        console.error('Error deleting book:', error);
        alert('Error deleting book');
      }
    }
  };

  const handleUpdate = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div 
      onClick={handleCardClick} 
      className="border rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-200"
    >
      {gambar && <img src={gambar} alt={title} className="w-full h-90 object-cover rounded" />}
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-700">Penulis: {author}</p>
      {showDetails && (
        <div className="mt-4">
          <p className="text-gray-500 mb-2">Tahun Terbit: {tahunTerbit}</p>
          <p className="text-gray-500">Deskripsi : {deskripsi}</p>
          <div className="flex justify-between mt-4">
            <button 
              onClick={(e) => { e.stopPropagation(); handleUpdate(); }} 
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700"
            >
              Edit
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); handleDelete(); }} 
              className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Hapus
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
