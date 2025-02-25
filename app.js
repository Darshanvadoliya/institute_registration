let express = require('express')
let app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./api.routes'))

app.listen(3002, () => {
    console.log('Server is running on port 3002')
    console.log('project institute registration');
})