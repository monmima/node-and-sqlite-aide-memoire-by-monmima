# node-and-mysqlite-aide-memoire-by-monmima

## Node.js + SQLite

This is an aide-mémoire (i. e., reference) for myself, but maybe you'll find it useful too!

In this project I use both Node.js and SQLite. You'll find that I use EJS too, but I make it very clear where I use it, so a newbee to some of these technologies won't et overwhelmed.

I was influenced by my own [Node and MongoDB CRUD Aide-Mémoire](https://github.com/monmima/node-and-mongodb-crud-aide-memoire-by-monmima) and my own [Node and SQL Aide-Mémoire](https://github.com/monmima/node-and-sql-aide-memoire-by-monmima), which are two very similar projects of mine. This is basically the same project, but with SQLite instead.

___

## A Word Of Thanks

### Node.js

This project was influenced by Brad Traversy's tutorial on MySQL and Node.js. He named his tutorial [Using MySQL With Node.js](https://www.youtube.com/watch?v=EN6Dx22cPRI).

Also, [Mosh Hamedani's Node.js tutorial on YouTube](https://www.youtube.com/watch?v=TlB_eWDSMt4) made it possible for me to create the .ejs-1 page, which documents Node.js.

### SQLite

Many thanks to [Dev Theory](https://www.youtube.com/watch?v=ueCT4HlQDwQ) for his two SQLite tutorials on YouTube. One is about the installation of SQLite and the other is about some of the CRUD operations. All in all, they have a running time of about 15 minutes.

By the way, his tutorials are in French.

___

## Technical Stuff

### SQLite Database location

**As you can see by looking at the project structure, the database is included at the root level and yup, the project will run just like that, without creating a server specifically for the database.**

### Possible Issues

When I created this aide-mémoire for MySQL in a similar project I mentionned earlier, I ran into different issues:

- I needed to use full text indexes to return only complete words and not just strings.
- I needed to import CSV data into phpMyAdmin and had a problem with a size limit for my database.
- I had ran into an "Invalid column count in CSV input on line 1." error message while importing CSV.

I don't know how likely these are to happen in SQLite too, so I advise you to read the [documentation for my Node.js and MySQL](https://github.com/monmima/node-and-sql-aide-memoire-by-monmima) project if you do.

### EJS: You don't want to learn it for now? No problem!

There are a few pages of the project/app using EJS.

If you don't want to learn EJS from the get-go or if you don't want to be overwhelmed as a newcomer to SQLite and Node.js, just don't take into account the EJS part of the code. It is **NOT** used all over the place in the project, just where I mention it.

Once you feel comfortable with Node.js and SQLite, then you'll be ready for EJS. EJS is a templating tool that enables you to insert data from your database into .ejs files, which are then rendered into HTML. The simplest form of EJS would be a regular old HTML page, but with an .ejs extension (and of course, that would be pointless).

If you do want to learn EJS, it's pretty straightforward. A good place to start is this aide-mémoire and another is [WalkthroughCode's EJS tutorial](https://github.com/monmima/node-ejs-tutorial-by-walkthroughcode).

___

## Running this project under Linux Mint

### Installing SQLite on Linux Mint

**Obviously, you can use Microsoft, Linux or the Macintosh operating system** to run this project, but since Linux Mint is my operating system, I can only explain what I did on my own system.

If you wish to edit the database, you'll need **DB Browser for SQLite**. Open a Terminal window and Just follow these steps:

1. sudo add-apt-repository -y ppa:linuxgndu/sqlitebrowser-testing
2. sudo apt-get update
3. sudo apt-get install sqlitebrowser

### Running the project as a whole

Open a Terminal window and follow these steps:

1. Type npm install
2. Type npm run serve / npm run start