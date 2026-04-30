import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/ecomm1");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const saveInDB = async()=>{
    const Product = mongoose.model('products', productSchema);

    const products =[
        {name: "phone", price: 10000},
        {name: "laptop", price: 50000},
        {name: "tablet", price: 20000},
        {name: "watch", price: 5000},
        {name: "camera", price: 30000},
        {name: "speaker", price: 4000}
    ];

    for(let item of products){
        let data = new Product(item);
        await data.save();
    }
    console.log("connected");

}

saveInDB()