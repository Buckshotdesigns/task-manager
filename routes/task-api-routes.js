var db = require("../models");

module.exports = function (app) {

    app.get("/api/tasks", function (req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        db.Tasks.findAll({
            // where: query,
            // include: [db.Users]
            where: {
                UserId: 5
            }
            
        }).then(function (dbTasks) {
            res.json(dbTasks);
            console.log(req.params.userId);
        });
    });
    // Get route for retrieving a single task
    app.get("/api/tasks/:id", function (req, res) {
        db.Tasks.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Users]
        }).then(function (dbTasks) {
            res.json(dbTasks);
        });
    });
    // POST route for saving a new task
    app.post("/api/tasks", function (req, res) {
        db.Tasks.create(req.body).then(function (dbTasks) {

            res.json(dbTasks);

            // need to pass in the UserId in another json object here

        });
    });
    // DELETE route for deleting tasks
    app.delete("/api/tasks/:id", function (req, res) {
        db.Tasks.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTasks) {
            res.json(dbTasks);
        });
    });


    // PUT route for completing tasks
    app.put("/api/task/:id", function (req, res) {
        console.log(req.params);
        db.Tasks.update({
            completed: 1
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (dbTasks) {
            res.json(dbTasks);
        });
    });
};