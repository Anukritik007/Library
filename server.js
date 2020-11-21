const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

app.set('view engine','ejs'); //using ejs as view engine
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout'); // every single file is going to be in layout(so that header & footer need not be duplicated)

app.use(expressLayouts);
app.use(express.static('public')); //files such as styles, js
app.use('/',indexRouter);

app.listen(process.env.PORT || 3000);