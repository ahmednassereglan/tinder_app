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

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: true,
//     useCreateIndex
//     });
// mongoose.connection.on('error', (err) => {
//     console.log(err);
// });
// mongoose.connection.on('open', () => {
// });



// Listen
app.listen(port, ()=> console.log(`Server started on Port : ${port}... and Listening to requests on http://localhost:${port} `))


// error handler
app.use((err, req, res, next)=> {
    console.log(err)
})





