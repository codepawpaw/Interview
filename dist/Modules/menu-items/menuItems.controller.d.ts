import Controller from "../../core/controller";
import App from "../../app";
import { NextFunction, Request, Response } from "express";
export declare class MenuItemsController extends Controller {
    path: string;
    private menuItemService;
    private _app;
    constructor(app: App);
    intializeRoutes(): void;
    getMenuItems(req: Request, res: Response, next: NextFunction): Promise<void>;
}
