

    var express = require('express'),
     router = express.Router();
    router.use("/pop", require("../controllers/api.js"))
     
    module.exports = router;