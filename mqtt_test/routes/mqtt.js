var express = require('express');
var router = express.Router();
var mqtt = require('mqtt');
var testdata = require('../testdata/testdata');
const client1 = mqtt.connect("mqtt://127.0.0.1:2230");
const client2 = mqtt.connect("mqtt://127.0.0.1:2231");

 
router.get('/mqtt_pub', function(req, res, next) {
    client1.publish('test', testdata.b100);
    res.send("in");
});
router.get('/kafka_pub', function(req, res, next) {
    client2.publish('test', testdata.b10);
    res.send("in");
});



module.exports = router;
