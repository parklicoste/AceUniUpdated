const router = require("express").Router();
const multer = require('multer');
const material = require("../controllers/material");
const auth = require('../middleware/auth');


const upload = multer({ dest: 'uploads/' })


router.post('/', auth, upload.single('file'), material.postMaterial)
router.get('/', auth, material.getMaterials)

module.exports = router;