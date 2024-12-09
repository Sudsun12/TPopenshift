const express = require('express');
const app = express();

// Serves files from the root directory
app.use(express.static('./'));

app.listen(3000, () => {
    console.log('listening at http://localhost:3000);
});
