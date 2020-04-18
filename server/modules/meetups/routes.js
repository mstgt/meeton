import { Router } from 'express';
import * as MeetupController from './controller';

import * as timeController from './timeControler';

const routes = new Router();

 routes.get('/meetups', MeetupController.getAllMeetups);

routes.post('/meetups', MeetupController.createMeetup);


routes.post('/meetups/hora', timeController.createTime );

export default routes;




