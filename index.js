const app = require('./server/app.js')
const port = 3000;


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})