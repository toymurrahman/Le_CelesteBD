require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://lecelestebd.web.app",
    "https://lecelestebd.firebaseapp.com",
   
  ],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// mongodb

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@tonmoy1.ufp6uns.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const menuCollection = client.db("LeCeleste").collection("menu");
    const reviewCollection = client.db("LeCeleste").collection("reviews");
    const cartCollection = client.db("LeCeleste").collection("carts");

    // menu collection
    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });


    // reviews collection
    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });


    // carts collection
    app.get('/carts', async(req,res)=>{
      const email = req.query.email;
      const query = { email: email}
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    })
    app.post('/carts', async(req,res)=>{
      const cartItem =req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    })

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "connected MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("start");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
