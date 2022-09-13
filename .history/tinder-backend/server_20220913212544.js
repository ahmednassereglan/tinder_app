// Importing
import express  from "express";
import mongoose from "mongoose";
import Cards from "./dbCard.js"


// App Config
const app = express();
const port = process.env.PORT || 8001 ;
const connection_url = "mongodb+srv://root:4AQpRvxx18k0wNym@cluster0.k2oj3nb.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });
app.options('*', cors());
app.use(cors());

// Rout
app.get('/',(req,res) => res.status(200).send("hello Yooooooooooooooo"))

app.post('/tinder/card/new' , (req, res) =>{
    const dbCard = req.body ;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(`Error creating card: ${err}`)
        }else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards' , (req, res) =>{
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(`Error Getting message : ${err}`)
        }else {
            res.status(200).send(data)
        }
    })
})






// DB Config 

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





