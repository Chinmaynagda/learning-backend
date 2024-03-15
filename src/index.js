import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: '../env'
});

app.on("error",(error) =>{
    console.log("Error: ",error)
    throw error
});

const PORT = process.env.PORT || 8000;

connectDB()
.then(() =>{
    app.listen(PORT,() => console.log("Server running at port: ",PORT))
} )
.catch((err) => {
    console.log("DB connection error",err);
})