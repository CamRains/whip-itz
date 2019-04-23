const bcrypt = require("bcrypt")
let user_id = 1;

module.exports = {
  // guest session

  register: (req, res) => {
    const { email, password, first_name, last_name } = req.body;
    const db = req.app.get("db");
    db.check_user_exists(email).then(user => {
      if (user.length) {
        res.status(200).send("Email already exists in the database ");
      } else {
        const saltRounds = 12;
        bcrypt.genSalt(saltRounds).then(salt => {
          bcrypt.has(password, salt).then(hashedPassword => {
            db.users([email, hashedPassword, first_name, last_name]).then(
              loggedInUser => {
                req.session.user = {
                  id: loggedInUser[0].id,
                  email: loggedInUser[0].email,
                  first_name: loggedInUser[0].first_name,
                  last_name: loggedInUser[0].last_name
                };
                res.status(200).send(req.session.user);
              }
            );
          });
        });
      }
    });
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");

    let userFound = await db.check_user_exists(email);
    if (!userFound[0]) {
      console.log(userFound);
      res.status(200).send("Incorrect email please try again");
    }
    let result = bcrypt.compare(password, userFound[0].user_password);
    if (result) {
      req.session.user = { id: userFound[0].id, email: userFound[0].email };
      res.status(200).send(req.session.user);
    } else {
      res.status(200).send("Incorrect email/password");
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  getSession: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else if (req.session.guest) {
      res.status(200).send(req.session.guest);
    } else {
      req.session.guest = {
        user_id: user_id,
        username: "guest",
        cart: []
      };
      user_id++;

      res.status(200).send(req.session.guest);
    }
  }
};
