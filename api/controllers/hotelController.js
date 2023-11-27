import Hotel from "../models/Hotel.js";

//CREATE hotel
export const createHotel = async(req, res,next)=>{
    
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    }catch(err){
        next(err);
    }
}

//UPDATE hotel
export const updateHotel = async(req, res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
        res.status(200).json(updatedHotel);

    }catch(err){
        next(err);
    }
}

//DELETE hotel
export const deleteHotel = async(req, res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");

    }catch(err){
        next(err);
    }
}

//GET hotel
export const getHotel = async(req, res,next)=>{
    try{
        const hotel =  await Hotel.findById(req.params.id);
         res.status(200).json(hotel);
 
     }catch(err){
        next(err);
     }
}


//GET ALL hotels
export const getAllHotels = async(req, res,next)=>{
 //get minimum and max price
 const {min, max, ...others} = parseInt(req.query)

    try{
        const hotels =  await Hotel.find();
         res.status(200).json(hotels);
 
     }catch(err){
         next(err);
     }
}

export const getHotels = async (req, res, next) => {
    const { min, max, ...others } = parseInt(req.query);
    try {
      const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  };

//GET count by city
export const countByCity = async(req, res,next)=>{
    const cities = req.query.cities.split(",")  //get the city values, split each by ",", then put them into an array
    if(cities){try{
        const list = await Promise.all(cities.map(city =>{
            return Hotel.countDocuments({city:city})
        }))
        
        res.status(200).json(list);
 
     }catch(err){
         next(err);
     }
    }
};


//GET count by type
export const countByType = async(req, res,next)=>{
    
    try{
        const hotelCount = await Hotel.countDocuments({type:"hotel"});
        const apartmentCount = await Hotel.countDocuments({type:"apartments"});
        const resortCount = await Hotel.countDocuments({type:"resorts"});
        const villaCount = await Hotel.countDocuments({type:"villas"});
        const cabinCount = await Hotel.countDocuments({type:"cabins"});

        res.status(200).json([
            {type:"hotel", count: hotelCount},
            {type:"apartments", count: apartmentCount},
            {type:"resorts", count: resortCount},
            {type:"villas", count: villaCount},
            {type:"cabins", count: cabinCount},

        ]);
     }catch(err){
         next(err);
     }
    }
