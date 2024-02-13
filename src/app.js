import express from "express";
import {pool} from './db.js'

const app = express()

app.get('/', (req, res ) => {
    res.send('Bienveniudo al server')
})


app.get('/ping', async (req, res ) => {
    const [result] = await pool.query('SELECT "HELLO WORLD" as RESULT'); 
    res.json(result[0])
})

app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO users(name) VALUES ("John")');
    res.json(result)
})

app.listen(3000)
console.log('server escuchando en el puerto 3000')

