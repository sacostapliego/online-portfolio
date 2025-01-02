import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    projectLanguage: {
        type: String,
        required: true
    },
    projectImage: {
        type: String,
        required: true
    },
    projectURL: {
        type: String,
        required: true
    },
}, {
    timestamp: true
});

const Project = mongoose.model('Project', projectSchema);

export default Project;