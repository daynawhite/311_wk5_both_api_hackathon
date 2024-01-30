const express = require('express');
const app = express();
const port = 4001;
const salaryRouter = require('./routes/salary')
const deptRouter = require('./routes/department')
const titleRouter = require('./routes/title')

app.use(express.json())


app.get('/', (req, res) => {
  res.send('hello world!');
})

app.use('/salaries', salaryRouter)
app.use('/salary', salaryRouter)
app.use('/departments', deptRouter)
app.use('/title', titleRouter)

app.listen(port, () => console.log(`Listening on port ${port}`));
