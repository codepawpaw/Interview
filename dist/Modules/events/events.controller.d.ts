import Controller from "../../core/controller";
import App from "../../app";
import { NextFunction, Request, Response } from "express";
declare class EventController extends Controller {
    path: string;
    private eventsService;
    private _app;
    constructor(app: App);
    intializeRoutes(): void;
    getWarmupEvents(req: Request, res: Response, next: NextFunction): Promise<void>;
    getEventsWithWorkshops(req: Request, res: Response, next: NextFunction): Promise<void>;
    getFutureEventWithWorkshops(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default EventController;
