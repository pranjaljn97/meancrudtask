    var express = require("express"),
     router = express.Router(),
     pop = require("../models/population.js");
     
    
    router.get("/", function(req, res) {
     pop.find({}, function(err, data) {
     if (err) {
     res.send("error");
     return;
     }
     res.send(data);
     });
    }).get("/:id", function(req, res) {
     var id = req.params.id;
     pop.find({ _id: id }, function(err, data) {
     if (err) {
     res.send("error");
     return;
     }
     res.send(data[0]);
     });
    }).post("/", function(req, res) {
     var obj = req.body;
     var model = new pop(obj);
     model.save(function(err) {
     if (err) {
     res.send("error");
     return;
     }
     res.send("created");
     });
    }).put("/:id", function(req, res) {
     var id = req.params.id;
     var obj = req.body;
     
     pop.findByIdAndUpdate(id, { Year: obj.Year, Population: obj.Population, GrowthRate: obj.GrowthRate , Growth: obj.Growth}, 
    function(err) {
     if (err) {
     res.send("error");
     return;
     }
     res.send("updated");
     });
    }).delete("/:id", function(req, res) {
     var id = req.params.id;
     pop.findByIdAndRemove(id, function(err) {
     if (err) {
     res.send("error");
     return;
     }
     res.send("deleted");
     });
    });
     
    module.exports = router;