const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const authenticationRoute = require("./routes/Authentication");
const materialRoutes = require('./routes/material')


const app = express();
app.use(express.json(), express.urlencoded({ extended: true }), cors());;

app.use('/api/material', materialRoutes);
app.use("/api/Authentication", authenticationRoute);

app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === 'MongoServerError' && err.code === 11000) err.status = 422;
    res.status(+err.status || +err.statusCode || +err.code || 500).send(err);
})

// app.use(bodyParser.json());
// app.use(methodOverride('_method'));
// app.set('view engine', 'ejs');

// const storage = new GridFsStorage({
//     url: 'mongodb+srv://aceuni:Carleton4905@khushalkumar.172pb.mongodb.net/Aceuni',
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err);
//           }
//           const filename = buf.toString('hex') + path.extname(file.originalname);
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'uploads'
//           };
//           resolve(fileInfo);
//         });
//       });
//     }
//   });
//   export const upload = multer({ storage });


// routes for get post and get 


const PORT = process.env.PORT || 8080;
mongoose
    .connect('mongodb+srv://aceuni:Carleton4905@khushalkumar.172pb.mongodb.net/Aceuni')
    .then(() => app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    }))