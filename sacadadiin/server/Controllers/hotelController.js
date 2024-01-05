const {PrismaClient} = require ('@prisma/client')
const prisma = new PrismaClient();


// Get
const getAll = async(req,res)=>{
    const getHotel = await prisma.hotel.findMany({});
    res.json({getHotel});
}
module.exports = {
    getAll
}
