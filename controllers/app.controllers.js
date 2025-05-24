class appcontroller{
    async home(req, res){
        try{
            res.render("home",{
                title:"home page"
            })
        }
        catch(err){
            throw err;
        }
    }

    async about(req, res){
        try{
            res.render("about",{
                title:"about page"
            })
        }
        catch(err){
            throw err;
        }
    }

    async blog(req, res){
        try{
            res.render("blog",{
                title:"blog page"
            })
        }
        catch(err){
            throw err;
        }
    }


    async testimonials(req, res){
        try{
            res.render("testimonials",{
                title:"testimonials page"
            })
        }
        catch(err){
            throw err;
        }
    }
}

module.exports= new appcontroller();