// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server. ' + err)
    }

    console.log('Connected to MongoDB server')

    // delete many
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result)
    // })

    // // delete one
    // db.collection('Todos').deleteOne({
    //     text: 'Walk the dog'
    // }).then((result) => {
    //     console.log(result)
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Users').deleteMany({
    //     name: 'Chris'
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5985b32fbf1e3cef68a0d436")
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2))
    })

    db.close()
})