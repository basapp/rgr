import express from 'express';
import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

let url = "mongodb://basapp:laserena@ds259325.mlab.com:59325/rgrdb";
let db;

MongoClient.connect(url, (err, database)=> {
    if (err) throw err;

    db = database;
    app.listen(3000, () => console.log('listening on port 3000'));   
});

app.get("/data/links", (req, res) => {
    console.log('hola');
    db.collection("links").find({}).toArray((err, links) => {
        if (err) throw err;
        res.json(links);
    });
});