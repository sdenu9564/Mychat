import mongoose from "mongoose";
import 'dotenv/config';


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = async() => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@cluster0-shard-00-00.otll1.mongodb.net:27017,cluster0-shard-00-01.otll1.mongodb.net:27017,cluster0-shard-00-02.otll1.mongodb.net:27017/?ssl=true&replicaSet=atlas-gxo9d2-shard-0&authSource=admin&retryWrites=true&w=majority&dbName=mychat`
    try {
         await mongoose.connect(URL,{
            useUnifiedTopology : true
        });
        console.log("datatabase connected succesfully")
    } catch (error) {
        console.log('failed to connect with database',error.message);
    }
}



export default connection;