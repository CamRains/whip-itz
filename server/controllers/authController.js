const bcrypt = require("bcryptjs");
let user_id = 1;

module.exports = {
  // guest session

  register: (req, res) => {
    const { email, password, first_name, last_name } = req.body;
    const db = req.app.get("db");
    db.check_user_exists(email).then(user => {
      if (user.length) {
        console.log("register label false", user);
        res.status(200).send("Email already exists in the database ");
      } else {
        console.log("register true", user);
        const saltRounds = 12;
        bcrypt.genSalt(saltRounds).then(salt => {
          bcrypt.hash(password, salt).then(hashedPassword => {
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
    if (userFound.length == 0) {
      console.log("label false", userFound);
      res.status(401).send("Incorrect Email or Password, please try again!");
    } else {
      console.log("true", userFound);
      let result = await bcrypt.compare  (password, userFound[0].password);
      console.log(result);

      if (result) {
        req.session.user = {
          user_id: userFound[0].user_id,
          email: userFound[0].email
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(401).send("Incorrect Email or Password, please try again!");
      }
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
