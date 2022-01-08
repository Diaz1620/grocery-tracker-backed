const mongoose = require('mongoose'),
    db = "change-me";

mongoose.connect(`mongodb://localhost/${db}`,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then( () => console.log("You are now in the mainframe...") )
    .catch(err => console.log(`Metldown Meltdown Meltdown`,err))