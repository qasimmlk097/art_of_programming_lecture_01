//this is for getting mongoDb from node packages (default)
const {MongoClient} = require('mongodb');
//this is a variable which contains the url for our db
const url = 'mogodb://localhost:27017/';
//as we have multiple dbs in our mongo db compass so we  have to make a variable which contains the name of the db.
const database = 'e-com';
// we have created a client, by passing the url of our mongo db to the default one 
const client = new MongoClient(url);
//now cient is the object containgig all the properties of our db. 

//this is the function to get all the data from a specific dbs collection.

//this is a async fucntion because this we need to wait for one procedure run and then next
async function getData(){
     // we need to wait for connection 
    let results = await client.connect();
    //we have to extracrt our required db. 
    let db = results.db(database);

    //db multiple products/items./brands so we need specify the collection. 
    let collection = db.collection('products');
    // this command is to get all the collection data from ecom/products collection. 
    let response = await collection.find({}).toArray();
    ///we will console.log( the collection);
    console.log(response);

}

//we have to run the function as well. 

getData();
