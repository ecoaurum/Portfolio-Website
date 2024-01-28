import express from 'express';
import Websites from '../models/websitesModel.js';
import expressAsyncHandler from 'express-async-handler';
import WebsiteData from '../data/WebsiteData.js';

const websiteRouter = express.Router();

//Add all projects to DB
websiteRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    try {
        const createWebsites = await Websites.insertMany(WebsiteData.websites);
        res.send({ createWebsites });        
    } catch (err) {
        console.log(err);
    }
}));

//Add latest project to DB
websiteRouter.get('/seed/latest', expressAsyncHandler(async (req, res) => {
    try {
        const latestWebsite = WebsiteData.websites[WebsiteData.websites.length - 1];    
        if (latestWebsite) {
          const createdWebsite = await Websites.create(latestWebsite);
          res.send({ createdWebsite });
        } else {
          return res.status(400).send({ message: 'No Latest Website Found' });
        }        
    } catch (err) {
        console.log(err);
    }
  }));

//Get all projects
websiteRouter.get('/', expressAsyncHandler(async (req, res) => {
    try {
        const websites = await Websites.find({});
        // console.log('All websites retrieved:', websites);
        res.send(websites);        
    } catch (err) {
        console.log(err);
    }
}));

//Get single project
websiteRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    try {
        const website = await Websites.findById(req.params.id);
        if (website) {
            res.send(website);
        } else {
            return res.status(400).send({ message: 'Website Not Found' });
        }        
    } catch (err) {
        console.log(err);
    }
}));

export default websiteRouter;
