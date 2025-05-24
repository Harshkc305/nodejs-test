const route= require("express").Router();
const appcontroller=require("../controllers/app.controllers")

route.get("/",appcontroller.home);
route.get("/about",appcontroller.about);
route.get("/blog",appcontroller.blog);
route.get("/testimonials",appcontroller.testimonials);


module.exports=route;