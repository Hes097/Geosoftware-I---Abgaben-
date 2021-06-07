var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017' // connection URL 
const client = new MongoClient(url)     // mongodb client 
const dbName = 'mydb'             // database name --> muss noch angepasst werden
const collectionName = 'test'           // collection name --> muss noch angepasst werden 


/* GET search page. */ //  /search/
router.get('/', function(req, res, next) 
{

  client.connect(function(err)
  {
    assert.equal(null, err)

  
    console.log('Connected successfully to server')

    const db = client.db(dbName)
    const collection = db.collection(collectionName)

  // Find some documents
  collection.find({}).toArray(function(err, docs)
  {
    assert.equal(err, null); 
    console.log('Found the following records...'); 
    //console.log(docs[0].features)
    res.render('1_search', { title: 'Search Route', data: docs[0].features });
  
  })
  
})

}); 

module.exports = router;