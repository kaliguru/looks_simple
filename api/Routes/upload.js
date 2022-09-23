const express = require('express');

const multer = require('multer');
const router = express.Router();

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uploads")
        },
        filename:function(res,file,cb)
        {
            cb(null,file.fieldname+"-"+Date.now()+ ".Xls")
        }
    })
}).single("user_upload");


router.post('/',upload,(req,res,next)=>
{
    res.status(200).json({
        msg:'File Upload'
    })
})


module.exports = router