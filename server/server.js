const PORT = process.env.PORT ?? 8000
const express = require('express');
const cors = require('cors')
const app = express();
const pool = require('./db.js')
const queries = require('./queries')


app.use(cors())


app.get('/todos/:userEmail', async (req, res)=>{
      const {userEmail} = req.params
      // console.log(userEmail)
      try {
            const todos = await pool.query(queries.getAllTodos, [userEmail]);
            res.json(todos.rows);
      } catch (error) {
            console.log(error);
      }
})






app.listen(PORT, ()=>{
      console.log(`server run on port ${PORT}`)
})