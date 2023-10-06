const bodyParser = require('body-parser');
const express = require('express');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
require('./config/dbConnect');
const morgan = require('morgan')


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use('/api/user', require('./routes/auth.route'));
app.use('/api/product', require('./routes/product.route'));
app.use('/api/blog', require('./routes/blog.route'));
app.use('/api/category', require('./routes/category.route'));
app.use("/api/blogcategory", require('./routes/blogCat.route'));
app.use("/api/brand", require('./routes/brand.router'));
app.use("/api/coupon", require('./routes/coupon.route'));




// pass this middleware after all routes configured

app.use(notFound);
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})