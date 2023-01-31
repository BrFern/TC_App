const router = express.Router(); //Newly added for image stuff, delete if needed
const Image = require("./client/src/models/image");

//NEW STUFF-LOOK AT IF NEEDED------------------------------------------------------------------
router.post("/store-image", async(req, res) => {
    try {
        const {image} = req.body;
        if(!image) {
            return res.status(400).json({"Please enter an image"});
        }
        let newImage = new Image({
            image,
        });

        newImage = await newImage.save();
        res.json(newImage);
    } catch(err) {
        res.status(500).json({error: err});
    }
});




module.exports = communityRouter;