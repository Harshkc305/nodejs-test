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

            const blogData = [
                {
                    card_title:"Getting Started with Bootstrap 5",
                    card_text:"Learn how to quickly set up and build responsive websites using the latest Bootstrap 5.3 framework.",
                    card_image:"/images/metal-gear-solid-snake-cool-orange-desktop-wallpaper-4k.jpg"
                },
                {
                    card_title:"Top 10 Web Design Tips",
                    card_text:"From layout to color choices, check out our top design tips to improve your website's user experience.",
                    card_image:"/images/metal-gear-solid-snake-cool-orange-desktop-wallpaper-4k.jpg"
                },
                
                {
                    card_title:"Why Mobile First Matters",
                    card_text:"Discover why designing for mobile first is crucial and how it benefits your users and SEO.",
                    card_image:"/images/metal-gear-solid-snake-cool-orange-desktop-wallpaper-4k.jpg"
                }
            ]
            res.render("blog",{
                title:"blog page",
                blog:blogData
            })
        }
        catch(err){
            throw err;
        }
    }


    async testimonials(req, res){
        try{

            const testimonialsData = [
                {name: "jane smith",
                    role: "ceo, techcorp",
                    massage:" my company has been using this service for over a year now, and we couldn't be happier. The team is professional, responsive, and always goes the extra mile to ensure our needs are met. Highly recommend!",
                    image: "/images/t6.jpg"
                },

                {name:"michael lee",
                role:" founder, appstart",
                massage:" as a startup founder, I was looking for a reliable partner to help me build my app. This team exceeded my expectations in every way. They were attentive, creative, and delivered a product that has received rave reviews from our users.",
                image: "/images/priyanka.jpg"
                },

                {name:"sofia patel",
                    role:" marketing director, brandify",
                    massage:" working with this team has been a game-changer for our marketing efforts. Their expertise in digital marketing and social media has helped us reach new audiences and grow our brand presence online.",
                    image: "/images/Sanam-Puri.jpg"
                }
            ]
            res.render("testimonials",{
                title:"testimonials page",
                testimonials:testimonialsData

            })
        }
        catch(err){
            throw err;
        }
    }
}

module.exports= new appcontroller();