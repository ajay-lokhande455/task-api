const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = require('./src/app');

dotenv.config();
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
