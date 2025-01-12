import express from "express";
import "./db.js"
import { Product } from "./model.js";



const app = express();
const port = 3000;
app.use(express.json());

app.get("/", async (req, response) => {
    const result = await Product.find()
    response.send(result);
});

app.post("/products", async (req, response) => {
    const { name, place } = req.body;
    const checlk = await Product.create({
        name,
        place,
    })
    response.send("succussfully added")
    console.log("🚀 ~ app.post ~ checlk:", checlk)
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});