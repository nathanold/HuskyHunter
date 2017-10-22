var app = require('../../../express');
var multer = require('multer'); // npm install multer --save
var upload = multer({dest: __dirname + '/../../uploads'});
var fs = require('fs');

app.post("/api/upload/:setNumber/:clueNumber", upload.single('myFile'), uploadImage);
function uploadImage(req, res) {
    var originalExtension = req.file.originalname.split(".")[1];
    fs.rename(__dirname + '/../../uploads/' + req.file.filename, __dirname + '/../../uploads/'
        + req.params.setNumber + "/" + req.params.clueNumber + "." + originalExtension);
    console.log("file uploaded");
    var callbackUrl = "/#!/";
    res.redirect(callbackUrl);
}