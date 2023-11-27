import express from "express";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels,getHotels, getHotel, updateHotel } from "../controllers/hotelController.js";


const router = express.Router();


// CREATE
router.post("/", createHotel);
//UPDATE

router.put("/:id",  updateHotel);

//DELETE

router.delete("/:id",  deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL

router.get("/", getHotels);

router.get("/countByCity", countByCity);

router.get("/countbyType", countByType);


export default router