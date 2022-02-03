// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const PORT = process.env.PORT || 5030


// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

app.use(express.static("frontend/build"))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build/index.html')) // important for 404!!!
})


// Listen on Port 5000
app.listen(PORT, () => console.info(`App listening on port ${PORT}`))