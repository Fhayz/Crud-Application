const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

// Define routes and their handlers here

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
    res.render('index');
  });
  
  app.get('/user-form', (req, res) => {
    res.render('user-form');
  });
  
  app.post('/user-form', (req, res) => {
    console.log(req.body);
    res.redirect('/admin-dashboard');
  });
  
  app.get('/admin-dashboard', (req, res) => {
    const users = [
      {
        fullName: req.body.fullname,
        stateOfOrigin: req.body.stateOfOrigin,
        dateOfBirth: req.body.dateOfBirth,
        age: req.body.age,
        gender: req.body.gender,
      },
    ];
    users.push(req.body);
    res.render('admin-dashboard', { users });
  });
  