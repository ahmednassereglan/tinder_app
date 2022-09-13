// Importing
import express  from "express";
import mongoose from "mongoose";


// App Config
const app = express();
const port = process.env.PORT || 8001 ;




// Rout
app.get('/',(req,res) => res.status(200).send("hello Yooooooooooooooo"))








// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



// DB Config 
const connection_url = "mongodb+srv://root:4AQpRvxx18k0wNym@cluster0.k2oj3nb.mongodb.net/tinderdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}).then(con => {
    console.log(`MongoDB Connection Succeeded With HOST: ${con.connection.host} , PORT: ${con.connection.port} .`)
})
.catch((error) => console.error("MongoDB connection failed:", error.message))



// Listen
app.listen(port, ()=> console.log(`Server started on Port : ${port}... and Listening to requests on http://localhost:${port} `))


// error handler
app.use((err, req, res, next)=> {
    console.log(err)
})





