import { Router } from "express";
import usersRouter from "./users.routes";
import piusRouter from "./pius.routes";


const routes = Router();
routes.use('/users', usersRouter);
routes.use('/pius', piusRouter);

export default routes;
