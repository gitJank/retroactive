var router = require('express').Router();

router.use('/tabs', require('./tab/tabRoutes'));
console.log("server running");
module.exports = router;