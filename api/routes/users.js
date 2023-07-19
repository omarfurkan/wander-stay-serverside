import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/userController.js';
const router = express.Router();

//update
router.put('/:id', updateUser)
//delete
router.delete("/:id", deleteUser)
//get
router.get("/:id", getUser)
//gell all
router.get("/", getUsers)

export default router;





