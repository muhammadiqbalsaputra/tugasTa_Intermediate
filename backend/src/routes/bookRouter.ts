import { Router } from "express";
import { getAllBooks, createBook, deleteBookById, updateBookById } from "../controllers/bookController";

const booksRouter = Router();

booksRouter.get('/',getAllBooks);
// booksRouter.get('/:id', getBooksById);
booksRouter.post('/',createBook);
booksRouter.put('/:id', updateBookById);
booksRouter.delete('/:id',deleteBookById);

export default booksRouter;
