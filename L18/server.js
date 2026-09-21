const express = require('express');
// const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.get('/:age', (req, res) => {
    let age = parseInt(req.params.age);
    try {
        if (age < 18) {
            throw new Error('You are not eligible to vote');
        } else {
            res.send('You are eligible to vote');

        }
    } catch (error) {
        // console.error('Error occurred:', error);
        // res.status(500).send('Internal Server Error');
        next(error);
    }
});

app.use((err, req, res, next) => {
    res.status(500).json({success: false, message: err.message});
});

app.use((req, res) => {
    res.status(500).json({success: false, message: 'Internal Server Error'});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});