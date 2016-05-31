
var express = require("express");
var router = express.Router();

router.get("/names", function (req, res) {
    res.json([{name: "Lukas"}, {name: "Mattias"}, {name: "David"}]);
});
router.get("/hellos", function (req, res) {
    res.json([{msg: "Hello World"}, {msg: "Hello all"}, {msg: "Hello guys"}]);
});
module.exports = router;
