const express = require('express');
const app = express();
const port = 4001;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world!');
})

const salaryRouter = require('./routes/salary')
app.use('/salaries', salaryRouter)
app.use('/salary', salaryRouter)

app.listen(port, () => console.log(`Listening on port ${port}`));