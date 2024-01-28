import express from 'express';
import Apps from '../models/appModel.js';
import expressAsyncHandler from 'express-async-handler';
import AppsData from '../data/AppData.js';

const appsRouter = express.Router();

//Add all projects to DB
appsRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    try {
        const createApps = await Apps.insertMany(AppsData.apps);
        res.send({ createApps });        
    } catch (err) {
        console.log(err);
    }
}));

//Add latest project to DB
appsRouter.get('/seed/latest', expressAsyncHandler(async (req, res) => {
    try {
        const latestApp = AppsData.apps[AppsData.apps.length - 1];    
        if (latestApp) {
          const createdApp = await Apps.create(latestApp);
          res.send({ createdApp });
        } else {
          return res.status(400).send({ message: 'No Latest App Found' });
        }        
    } catch (err) {
        console.log(err);
    }
  }));

//Get all projects
appsRouter.get('/', expressAsyncHandler(async (req, res) => {
    try {
        const apps = await Apps.find({});
        // console.log('All apps retrieved:', apps);
        res.send(apps);        
    } catch (err) {
        console.log(err);
    }
}));

//Get single project
appsRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    try {
        const app = await Apps.findById(req.params.id);
        // console.log('App by ID:', app);
        if (app) {
            res.send(app)
        } else {
            return res.status(400).send({ message: 'App Not Found' });
        }        
    } catch (err) {
        console.log(err);
    }
}));

export default appsRouter;