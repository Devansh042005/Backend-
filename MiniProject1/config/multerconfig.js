const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/uploads'); // Specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        crypto.randomBtyes(12, function(err, name){
            const fn = name.toString("hex")+ path.extreme(file.originalname);
            cb(null, fn);
        })
    }
});
const upload = multer({storage: storage})
module.exports = upload;