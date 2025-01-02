import mongoose from "mongoose";
import Project from "../models/projects.model.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        console.log("Error in fetching projects", error.messages);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }

}

export const createProject = async (req, res) => {
    const project = req.body; // req.body is the data that is sent to the server

    if (!project.projectName || !project.projectDescription || !project.projectLanguage || !project.projectImage || !project.projectURL) {
        res.status(400).send({ message: 'Invalid data' });
        return;
    }

    const newProject = new Project(project);

    try {
        await newProject.save();
        res.status(201).json({ success:true, data: newProject });
    } catch (error) {
        console.log("Error in create project", error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}