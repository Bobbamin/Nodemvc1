const express = require('express')
const app = express()
const cors = require('cors')
const ejs = require('ejs')
const bdd = require('./models/pool.js')
const PORT = 8080

app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('views', __dirname + '/vues')
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))

app.get('/message', (req, res) => res.render('index', { message: "Bienvenue"}))

app.get('/actors', (req, res) => {
    bdd.getAll('actor', (actors) => {
        console.log(actors)
        res.render('actors', {actors:actors})
    })
})

app.get('/actor/:id', (req, res) => {
    bdd.getOneId('actor',req.params.id,(actors) => {
        res.render('actor', {actor:actors})
    })
})

app.get('/')

app.listen(PORT, ()=> console.log('listening on port'+PORT))

 



