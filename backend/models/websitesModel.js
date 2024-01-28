import mongoose from "mongoose";

const websitesModel = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    image: { type: String, required: true},
    projectLink: { type: String, required: true},
    githubLink: { type: String, required: true},
    description: { type: String, required: true},
    imageTitle: [
        {
            title: { type: String, required: true},
            image: { type: String, required: true},
            description: { type: String, required: true},
        }

    ]
},
{
    timestamps: true
});

const Websites = mongoose.model('Websites', websitesModel);
export default Websites;