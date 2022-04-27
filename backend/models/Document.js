const mongoose = require ("mongoose");

//Defining the model for the user
const DocumentSchema = new mongoose.Schema({
    
            document: {
                type: String, 
                required:true,
            }

});

module.exports = mongoose.model("Document",DocumentSchema);