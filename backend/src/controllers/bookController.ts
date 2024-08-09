import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const bookClient = prisma.book;

//getAllBooks
export const getAllBooks = async (req, res) => {
    try {
      const allBooks = await bookClient.findMany();
      res.status(200).send({
        msg: "Get all books successfully",
        data: allBooks
      });
    } catch (e) {
      console.error(e);
      res.status(500).send({
        msg: "Error getting books",
        error: e.message
      });
    }
  };
  
// Create Books
export const createBook = async (req, res) => {
    try {
      const { title, author, tahunTerbit, deskripsi, gambar } = req.body;
      const book = await bookClient.create({
        data: {
          title,
          author,
          tahunTerbit,
          deskripsi,
          gambar,
        },
      });
      res.status(201).send({
        msg: 'Create data book successfully',
        data: book,
      });
    } catch (e) {
      console.error(e);
      res.status(500).send({
        msg: 'Error creating book',
        error: e.message,
      });
    }
  };

// Delete Book by Id
export const deleteBookById = async (req, res) => {
  console.log(`Request to delete book with ID: ${req.params.id}`);
  try {
      const { id } = req.params;
      const deletedBook = await bookClient.delete({
          where: { id: parseInt(id, 10) }
      });
      res.status(200).send({
          msg: "Delete book successfully",
          data: deletedBook
      });
  } catch (e) {
      console.error('Error during delete:', e.message);
      res.status(500).send({
          msg: "Error deleting book",
          error: e.message
      });
  }
};


// Update Books
export const updateBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;

        const updatedBook = await bookClient.update({
            where: { id: parseInt(id, 10) },
            data: {
                title: update.title,
                author: update.author,
                tahunTerbit: update.tahunTerbit,
                deskripsi: update.deskripsi,
                gambar: update.gambar
            }
        });

        res.status(200).send({
            msg: "Update book successfully",
            data: updatedBook
        });
    } catch (e) {
        console.error(e);
        res.status(500).send({
            msg: "Error updating book",
            error: e.message
        });
    }
};