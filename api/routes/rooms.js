import express from 'express'
import { createRoom, deleteRoom, getRoom, updateRoom } from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

// create
router.post('/:hotelid', verifyAdmin, createRoom)
// update
router.put('/:id', verifyAdmin, updateRoom)
//delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)
// get 
router.get('/:id', getRoom)
// get all
router.get('/', getRoom)








export default router