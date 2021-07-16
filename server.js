const exphbs = require('express-handlebars');
const express = require('express');

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('../app/routes/api-routes.js')(app)
require('../app/routes/html-routes.js')(app)


app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);


// connection.connect((err) => {
//   if (err) {
//     console.error(`error connecting: ${err.stack}`);
//     return;
//   }
//   console.log(`connected as id ${connection.threadId}`);
// });


// app.get('/', (req, res) => {
//   connection.query(
//     'SELECT * FROM lakes', 
//     (err, data) => {
//       if (err) {
//         return res.status(500).end()
//       }
//       res.render('lake', {lakes: data})

//   })
// })

// app.get('/:lake', (req, res) => {
//   connection.query(
//     'SELECT * FROM lakes', 
//     (err, data) => {
//       if (err) {
//         return res.status(500).end()
//       }
//       res.render('lake', {lakes: data})

//   })
// })









// // app.get('/', (req, res) => {


//   //     res.render('search', {})
      
//   //   })
  
//   // app.get('/api/Jenny', (req, res) => {
//   //   connection.query(
//   //     'SELECT * FROM lakes',  
//   //     [req.body.lake],
//   //     (err, data) => {
//   //     if (err) {
//   //       return res.statusMessage(500).end()
//   //     }
  
//   //     res.render('lake', {lakes: data[0]})
      
//   //   })
//   // })