const express = require('express');
const app = express();

// Serves files from the root directory
app.use(express.static('./'));

app.listen(8080, () => {
    console.log('listening at http://localhost:3000);
});
