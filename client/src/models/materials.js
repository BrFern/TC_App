const {default: mongoose} = require ('mongoose');

const materialsSchema = new mongoose.Schema ({
    img: { 
        type: File,
        require: true
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