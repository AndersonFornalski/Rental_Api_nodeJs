const Rental =  require("./rental")

class FakeDb{
    constructor(){
        this.rentals = [
        {
            title:"Nice View on Ocean",
            city:"San Francisco",
            street:"Main Street",
            category:"condo",
            image:"src/img/house1.jpg",
            bedrooms:4,
            shared: true,
            description:"Apartamento de Merda",
            dayleRate:43,
        },

        {
            title:"Modern Apartment in center",
            city:"New York",
            street:"Times Square",
            category:"Apartment",
            image:"src/img/house1.jpg",
            bedrooms:2,
            shared: false,
            description:"Very nice apartment in center of the city",
            dayleRate:43,
        },

        {
            title:"Lugar Muito Bom ",
            city:"San Francisco",
            street:"Main Street",
            category:"condo",
            image:"../img/house1.jpg",  
            bedrooms:3,
            shared: true,
            description:"Very nice apartment in center of the city",
            dayleRate:43,
        },
    
        {
            title:"Lugar Show de bola ",
            city:"San Los Santos",
            street:"Fuck End",
            category:"Apartment",
            image:"../img/house2.jpg",  
            bedrooms:7,
            shared: false,
            description:"beatiful", 
            dayleRate:43,   
        }
    ]  
    }

    async cleanDb(){
       await Rental.deleteMany({});
    }
    

    pushRentalsToDb(){
        this.rentals.forEach((rental)=>{
            const newRental = new Rental(rental);
            newRental.save();
        })
    }
    seeDb(){
        this.cleanDb();
        this.pushRentalsToDb()
    }
}

module.exports = FakeDb;
