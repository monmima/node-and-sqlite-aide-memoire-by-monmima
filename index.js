/**
 * constants
 */

const express = require("express");
const path = require('path');
const bodyParser = require('body-parser'); // needed to read the content from the form

const sqlite3 = require("sqlite3");
const dbname = "test.db";

/**
 * define the number of your port
 */
const PORT = process.env.PORT || 5000

/**
 * using express and the body-parser module
 */
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * opening the database
 */
let db = new sqlite3.Database(dbname, err => {
    if (err) {
        throw err
    }

    console.log(`Database started on ${dbname}`);

    db.all("SELECT * FROM students_tb", (err, data) => {
        console.log(data);
    });

    /**
        SQL Operations in SQLite

        .get // getting the first line from a select query
        .all // getting all the lines from a select query
        .each // getting all lines one by one

        CREATE, INSERT, UPDATE...
        .run

        // db.run("CREATE TABLE test(name VARCHAR(255))");
        // db.run("INSERT INTO test(name) VALUES(?)", ["Boris"]);
    */

});

/**
 * reading all entries
 */
app.get("/get-posts", (req, res) => {
    db.all("SELECT * FROM students_tb", (err, data) => {
        console.log(data);

        if (err) {
            res.status(200).send("Error... Are you sure you have created a table?");
            // throw err;
            console.log(err);
        } else {
            console.log(data);
            res.status(200).json(data);
            // res.status(200).send((myRes));
        }
    });
});

// reading single posts
app.get("/get-post/:id", (req, res) => {
    db.get(`SELECT * FROM students_tb WHERE Field1 = ${req.params.id}`, (err, data) => {
        console.log(data);

        if (err) {
            res.status(200).send("Error... Are you sure you have created a table?");
            // throw err;
            console.log(err);
        } else {
            console.log(data);
            res.status(200).json(data);
            // res.status(200).send((myRes));
        }
    });
});

/**
 * EJS
 * concatenating the current working directory
 * and a folder called views
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
 
 /**
  * serving static files from the "public" folder
  * this includes: image, HTML and JS files, etc.
  */
app.use(express.static(path.resolve(__dirname, 'public')));

/**
 * EJS template 1
 */
app.get('/ejs-1', (req, res) => {
    res.status(200).render("ejs-1");
});

/**
 * EJS template 2
 */
app.get('/ejs-2', (req, res) => {
    res.status(200).render("ejs-2", {
        node : {
            dirname: __dirname,
            filename: __filename
        }
    });
});

/**
 * EJS template 3
 */
app.get('/ejs-3', (req, res) => {
    db.all("SELECT * FROM students_tb", (err, data) => {
        if (err) {
            // throw err;
            console.log(err);
        } else {
            console.log(data);

            res.status(200).render("ejs-3", { students : data });
        }
    });
});

/**
 * handling 404 errors
 * source: https://expressjs.com/en/starter/faq.html
 */
app.use(function (req, res, next) {
    res.status(404).send("404 - Sorry can't find that!")
});

/**
 * handling connections to the server
 */
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

/**
 * closing the database - ideally, you should do this
 */
// db.close(err => {
//     if (err) {
//         throw err;
//     }
//     console.log(`Databased closed.`);
// });
