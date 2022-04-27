const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
})



module.exports = () => multer({
    storage: fileStorage,
})

// app.use(multer().single('image-name'))

// const controller = (req, res) => {
//     const image = req.file;
//     console.log(image)
// }