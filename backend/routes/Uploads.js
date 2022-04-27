const router = require ("express").Router();
const Document = require("../models/Document");
const upload = require("../middleware/upload")

router.post("/upload", upload.single('document') ,async (req,res)=>{
    
    //TODO: Error Handler for empty username and password
    // res.json({file: req.file });
    console.log(req);

    const newUpload = new Document({
        document: req.file.path
    });

    newUpload.save().then(res => {
        res.json({
            message: "File Uploaded successfully"
        })
    }).catch(error =>{
        res.json({
            message: "An Error Occured"
        })
    })
    // try{
    //     const savedFile = await newUpload.save();
    //     res.status(201).json(savedFile);
    // }catch(err){
    //     res.status(500).json(err);
    // }

});






module.exports =router;