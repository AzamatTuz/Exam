const express = require('express')
const app = express()
const pool = require('./db')
app.use(express.json())

app.listen(3000,() => {
  console.log("Server is running");
})


app.post('/addproduct', async (req, res) => {
    const {name, description, quality, price} = req.body

    try {
        const result = await pool.query('INSERT INTO products(name, description, quality, price) VALUES($1, $2, $3, $4)', [name, description, quality, price])
        res.send('Успешно добавлен!!!')
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
        
    }
})

app.get('/products', async ( req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products')
        res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
        
    }
})

app.put('/product/update/:id', async (req, res) => {
    const {id} = req.params
    const {name, description, quality, price} = req.body

    try {
        const result = await pool.query(`UPDATE products SET name=$1, description=$2, quality=$3, price=$4 where id=$5`, [name, description, quality, price, id])
        res.json('Успешно изменено!!!')
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
        
    }
})

app.delete('/product/delete/:id', async (req, res) => {
    const {id} = req.params

    try {
        const result = await pool.query('DELETE FROM products WHERE id = $1', [id])
        res.json('Успешно удалено!!!')
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
        
    }
})

app.get('/products/expensive', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products where price>500000")
        res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
    }
})