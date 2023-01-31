const {default: mongoose} = require ('mongoose');

const materialsSchema = new mongoose.Schema ({
    image: { 
        type: String,
        
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
});

export default materialsSchema;