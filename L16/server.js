const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(morgan('combined'));

// const logMiddleware = (req, res, next) => {
//     // console.log(`${req.method} ${req.url}`);
//     req.name = "John Doe";
//     console.log(`Request url: ${req.url}, request method: ${req.method}`, req.method,"Time:", new Date().toLocaleString());
//     // res.send("Hello from middleware")
//     next();
// }

const apiCheckMiddleware = (req, res, next) => {
    if (req.query.api_key === '12345') {
        console.log('API key is valid');
        next();
    } else {
        res.json({ 
            city: "New York",
            country: "USA",
            temperature: 25,
            humidity: 60
         });
    }
    
}

// app.use(logMiddleware);
app.use(apiCheckMiddleware);

app.get('/', (req, res) => {
    console.log(`Request name: ${req.name}`);
    console.log('Hello, World!');
    res.send('Hello, World!');
})

app.get('/data', (req, res) => {
    console.log('Data route accessed');
    res.send('This is the data route');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});