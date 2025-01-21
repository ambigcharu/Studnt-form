const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle POST request from form
app.post('/submit', (req, res) => {
    const { 
        firstname,
        middlename,
        lastname,
        rollNo,
        branch,
        year,
        semester,
        phone,
        dateOfBirth,
        email,
        address,
     } = req.body;


    console.log('Received Student Information:');
    console.log(`First Name: ${firstname}`);
    console.log(`Middle Name: ${middlename}`);
    console.log(`Last Name: ${lastname}`);

    console.log(`P_First Name: ${ p_Firstname}`);
    console.log(`P_Middle Name: ${ p_Middlename}`);
    console.log(`P_Last Name: ${p_Lastname}`);

    console.log(`Roll No: ${rollNo}`);
    console.log(`Branch: ${branch}`);
    console.log(`Year: ${year}`);
    console.log(`Semester: ${semester}`);
    console.log(`Phone: ${phone}`);
    console.log(`Date of Birth: ${dateOfBirth}`);
    console.log(`Email: ${email}`);
    console.log(`Address: ${address}`);
    
    res.json({ success: true, message: 'Form submitted successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
