const express = require('express');
const router = express.Router();

// Things go from top to bottom in Express JS so have to be careful with params. Put dynamic routes at the end.

router.get('/', (req, res) => {
  console.log(req.query.name);
  res.send('other');
});

router.get('/new', (req, res) => {
  res.render('other/new', { firstName: "asdfasd" });
});

router.post('/', (req, res) => {
  console.log(req.body.firstName);
  const isValid = false;

  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/other/${users.length - 1}`);
  } else {
    console.log('error');
    res.render('other/new', { firstName: req.body.firstName, message: "not valid mate" });
  }  
});

router.route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User With ID ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
  });

const users = [{ name: "kyle" }, { name: "Sally" }];  

// This code runs whenever id param is in url. Middleware runs first. Just saves repeating for each request type.
router.param("id", (req, res, next, id) => {
  console.log(id);
  req.user = users[id];
  next();
});

module.exports = router;