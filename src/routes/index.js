const newsRouter = require("./news");
const siteRouter = require("./site");

function route (app) {

    app.use("/news", newsRouter)
    app.use("/", siteRouter)
    
    // app.post("/search", (req, res) => {
    //     // console.log(req.body); //=> post data
    //     // console.log(req.query); => /search?name=abc
    //     res.send("");
    // });
}

module.exports = route;