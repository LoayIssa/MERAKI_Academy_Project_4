const express = require('express');
const cors = require('cors');
const db = require('./db/db');
require('dotenv').config();



const roleRouter = require('./routers/routes/role');
const usersModel=require('./routers/routes/user')
const restaurantModel = require("./routers/routes/restaurant")
const ratingModel=require("./routers/routes/review")
const menuModel=require("./routers/routes/menu")
const loginModel=require("./routers/routes/login")
const app = express();

//routers

//built-in middlewares
app.use(express.json());
app.use(cors());
app.use(roleRouter);
app.use(usersModel)
app.use(restaurantModel)
app.use(ratingModel)
app.use(menuModel)
app.use(loginModel)
//third-party middleware


//app routers

const PORT =5000;
/*app.use(PORT, () => {
	console.log(`Server On ${PORT}`);
});*/

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
