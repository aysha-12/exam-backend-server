const express = require('express')
const app = express()
const port=7000

// mid
const cors = require('cors')
app.use(cors())

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('isdhfaijhfisdhf')
})

const products = [
  {
    id:1,
    name: "Health Tablets – Energy Boost",
    ratings: 4.5,
    price: "$22.9",
    button: "add to card",
    img:"https://i.ibb.co/HpgCZD3V/headache-pain-pills-medication-159211.webp"

  },
  {
    id:2,
    name: "Medicine, Drugs & Wellness Pack",
    ratings: 5,
    price: "$24.99",
    button: "add to card",
    img:"https://i.ibb.co/k6wzMh5X/Image-1.png"
  },
  {
    id:3,
    name: "Mutual Recognition Medicinal Pack",
    ratings: 4.7,
    price: "$20",
    button: "add to card",
    img:"https://i.ibb.co/hJ4r6LvV/Image-1.png"
  },
  {
    id:4,
    name: "New Pharmaceutical Product",
    ratings: 3,
    price: "$20",
    button: "add to card",
    img:"https://i.ibb.co/PGGH9dVz/pexels-photo-208518.webp"
  },
  {
    id:5,
    name: "Brain Health & Performance Booster",
    ratings: 4,
    price: "$14.99",
    button:"add to card",
    img:"https://i.ibb.co/C5thBXDB/pexels-photo-208541.webp"
  },
  {
    id:6,
    name: "Multivitamins for Men & Women",
    ratings: 3.2,
    price: "$18.99",
    button: "add to card",
    img:"https://i.ibb.co/YFcCqQb8/pexels-photo-3652701.webp"
  },
  {
    id:7,
    name: "Basic Wellness Supplement",
    ratings: 4,
    price: "$19.99",
    button: "add to card",
    img:"https://i.ibb.co/wHCwTmQ/pexels-photo-3683074.webp"
  },
  {
    id:8,
    name: "Pharmaceutical Health Product",
    ratings: 2.5,
    price: "$13.99",
    button: "add to card",
    img:"https://i.ibb.co/ksssdhSD/pexels-photo-3683099.webp"
  },
  {
    id:9,
    name: "Women's Health & Energy Supplement",
    ratings: 5,
    price: "$50",
    button:"add to card",
    img:"https://i.ibb.co/kVNJGs0n/thermometer-headache-pain-pills-139398.webp"
  }
];

app.get('/medicine',(req,res)=>{
    res.send(products)

})

app.listen(port,()=>{
    console.log(`our server is runing ${port}`);
    
})